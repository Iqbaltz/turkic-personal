import { cloneElement, Fragment, isValidElement, type CSSProperties, type ReactNode } from "react";

// Inverse of an ease-in-out sine: how far through the wipe's time the edge reaches a given share of the text.
const timeAt = (progress: number) => Math.round((Math.acos(1 - 2 * progress) / Math.PI) * 10000) / 10000;

function length(node: ReactNode): number {
  if (typeof node === "string") return node.length;
  if (Array.isArray(node)) return node.reduce((sum: number, child) => sum + length(child), 0);
  if (isValidElement<{ children?: ReactNode }>(node)) return length(node.props.children);
  return 0;
}

/** Wraps each word of `node` in a timed span, starting `start` letters into a text `total` letters long. */
function split(node: ReactNode, start: number, total: number): [ReactNode, number] {
  if (typeof node === "string") {
    const out: ReactNode[] = [];
    let position = start;
    for (const [i, part] of node.split(/(\s+)/).entries()) {
      const from = position;
      position += part.length;
      if (!part.trim()) {
        out.push(part);
        continue;
      }
      const timing = { "--t0": timeAt(from / total), "--t1": timeAt(position / total) } as CSSProperties;
      out.push(
        <span key={i} className="word" style={timing}>
          {part}
        </span>,
      );
    }
    return [out, position];
  }
  if (Array.isArray(node)) {
    const out: ReactNode[] = [];
    let position = start;
    for (const [i, child] of node.entries()) {
      const [words, end] = split(child, position, total);
      out.push(<Fragment key={i}>{words}</Fragment>);
      position = end;
    }
    return [out, position];
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    const [words, end] = split(node.props.children, start, total);
    return [cloneElement(node, undefined, words), end];
  }
  return [node, start];
}

/**
 * Lays a heading out for a single wipe that sweeps through its text from left to right and on down the lines,
 * keeping inline elements like <em>. Each word is timed by where its letters fall in the whole heading.
 */
export function Words({ children }: { children: ReactNode }) {
  const total = length(children);
  return (
    <span className="wipe" style={{ "--chars": total } as CSSProperties}>
      {split(children, 0, total)[0]}
    </span>
  );
}
