import { ImageResponse } from "next/og";

export const alt = "Muhammad Iqbal, Software Engineer in Jakarta, Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const star = (fill: string) =>
  `<g fill='${fill}'><rect x='9' y='9' width='14' height='14'/><rect x='9' y='9' width='14' height='14' transform='rotate(45 16 16)'/></g>`;

const tile = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><rect width='32' height='32' fill='#C6E3DE'/>${star("#9ACFC7")}<circle cx='16' cy='16' r='2.5' fill='#FBF7EF'/></svg>`,
)}`;

const arch = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='420' height='520' viewBox='0 0 420 520'>` +
    `<path d='M10 520V220C10 120 110 52 210 10C310 52 410 120 410 220V520Z' fill='#FBF7EF' stroke='#C9B690' stroke-width='3'/>` +
    `<path d='M60 520V232C60 150 136 96 210 62C284 96 360 150 360 232V520Z' fill='#E2F1EE' stroke='#9ACFC7' stroke-width='3'/>` +
    `<path d='M110 520V250C110 190 160 150 210 124C260 150 310 190 310 250V520Z' fill='#F2D3CE'/>` +
    `<g transform='translate(146 250) scale(4)'>${star("#6F86B5")}<circle cx='16' cy='16' r='4' fill='#FBF7EF'/></g>` +
    `</svg>`,
)}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F5EDE0",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 72px", flex: 1 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#6B5F52",
            }}
          >
            Software Engineer · Jakarta
          </div>
          <div style={{ display: "flex", fontSize: 92, lineHeight: 1, color: "#3A322A", marginTop: 24 }}>Muhammad</div>
          <div style={{ display: "flex", fontSize: 92, lineHeight: 1, color: "#3B6B66", fontStyle: "italic" }}>Iqbal</div>
          <div style={{ display: "flex", fontSize: 30, color: "#6B5F52", marginTop: 32, maxWidth: 560 }}>
            React, Next.js, TypeScript and .NET, built with care.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", paddingRight: 72, height: "100%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={arch} width={420} height={520} alt="" />
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 28,
            backgroundImage: `url("${tile}")`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>
    ),
    size,
  );
}
