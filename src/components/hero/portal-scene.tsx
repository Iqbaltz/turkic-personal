import { palette as c } from "@/lib/palette";
import { TulipGlyph } from "@/components/ornaments";

// Both layers share one 1600×1000 stage, sliced to cover the viewport, so the
// gate's opening always lines up with the courtyard behind it.
const VIEW = "0 0 1600 1000";

// A two-centred pointed arch: 300 wide, springing at y=760, apex at y=560.
const OPENING = "M650 1000V760A208.3 208.3 0 0 1 800 560A208.3 208.3 0 0 1 950 760V1000Z";
const INNER_ARC = "M650 760A208.3 208.3 0 0 1 800 560A208.3 208.3 0 0 1 950 760";
const BAND_ARC = "M635 760A223.3 223.3 0 0 1 800 544.4A223.3 223.3 0 0 1 965 760";
const OUTER_ARC = "M620 760A238.3 238.3 0 0 1 800 528.9A238.3 238.3 0 0 1 980 760";
const WALL = "M-1200-1200H2800V2200H-1200Z";

function cypress(x: number, top: number, bottom: number, w: number) {
  const h = bottom - top;
  return `M${x} ${top}C${x + w * 0.55} ${top + h * 0.22} ${x + w} ${top + h * 0.55} ${x + w * 0.72} ${bottom}L${x - w * 0.72} ${bottom}C${x - w} ${top + h * 0.55} ${x - w * 0.55} ${top + h * 0.22} ${x} ${top}Z`;
}

function Cypress({ x, top, bottom, w }: { x: number; top: number; bottom: number; w: number }) {
  return (
    <g>
      <path d={cypress(x, top, bottom, w)} fill={c.sage500} />
      <path d={cypress(x + w * 0.18, top + 14, bottom - 6, w * 0.55)} fill={c.sage300} opacity="0.45" />
      <path d={`M${x} ${top + 30}V${bottom - 10}`} stroke={c.sage700} strokeOpacity="0.25" strokeWidth="1.5" />
    </g>
  );
}

function Pot({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <path d={`M${x - 36} ${y}H${x + 36}L${x + 27} ${y + 50}H${x - 27}Z`} fill={c.turq300} stroke={c.cobalt300} strokeWidth="1.5" />
      <rect x={x - 38} y={y - 6} width="76" height="10" rx="3" fill={c.sand50} stroke={c.khaki400} />
      <path d={`M${x - 31} ${y + 20}H${x + 31}`} stroke={c.sand50} strokeWidth="5" strokeDasharray="5 5" />
    </g>
  );
}

function crestRow(x0: number, y: number, width: number, count: number) {
  const step = width / count;
  let d = "";
  for (let i = 0; i < count; i++) {
    const x = x0 + i * step;
    d += `M${x} ${y}V${y - 8}C${x + step * 0.22} ${y - 8} ${x + step * 0.4} ${y - 14} ${x + step / 2} ${y - 26}C${x + step * 0.6} ${y - 14} ${x + step * 0.78} ${y - 8} ${x + step} ${y - 8}V${y}Z`;
  }
  return d;
}

export function FacadeLayer() {
  return (
    <svg viewBox={VIEW} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden focusable="false">
      <defs>
        <linearGradient id="fc-wall" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1000">
          <stop offset="0" stopColor="#F8F1E6" />
          <stop offset="1" stopColor="#EDE0CA" />
        </linearGradient>
        <radialGradient id="fc-light" gradientUnits="userSpaceOnUse" cx="420" cy="140" r="900">
          <stop offset="0" stopColor="#FFFBF3" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FFFBF3" stopOpacity="0" />
        </radialGradient>
        <pattern id="fc-stone" width="140" height="96" patternUnits="userSpaceOnUse">
          <path d="M0 47.5H140M0 95.5H140M0.5 0V48M70.5 48V96" fill="none" stroke="#CDBB98" strokeOpacity="0.32" />
        </pattern>
        <pattern id="fc-band" width="24" height="24" patternUnits="userSpaceOnUse">
          <rect width="24" height="24" fill={c.turq200} />
          <g fill={c.cobalt300}>
            <rect x="7" y="7" width="10" height="10" />
            <rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)" />
          </g>
          <circle cx="12" cy="12" r="2" fill={c.sand50} />
          <g fill={c.turq300}>
            <circle cx="0" cy="0" r="2.4" />
            <circle cx="24" cy="0" r="2.4" />
            <circle cx="0" cy="24" r="2.4" />
            <circle cx="24" cy="24" r="2.4" />
          </g>
        </pattern>
        <pattern id="fc-spandrel" width="56" height="64" patternUnits="userSpaceOnUse">
          <rect width="56" height="64" fill={c.sand50} />
          <TulipGlyph transform="translate(19 3) scale(0.9)" petal={c.rose300} deep={c.rose500} leaf={c.sage300} />
          <TulipGlyph transform="translate(-9 35) scale(0.9)" petal={c.turq300} deep={c.turq500} leaf={c.sage300} />
          <TulipGlyph transform="translate(47 35) scale(0.9)" petal={c.turq300} deep={c.turq500} leaf={c.sage300} />
          <TulipGlyph transform="translate(19 -29) scale(0.9)" petal={c.rose300} deep={c.rose500} leaf={c.sage300} />
        </pattern>
        <radialGradient id="fc-glow">
          <stop offset="0" stopColor="#FCE6C6" stopOpacity="0.95" />
          <stop offset="1" stopColor="#FCE6C6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* The wall, with the doorway cut through it */}
      <path d={`${WALL}${OPENING}`} fillRule="evenodd" fill="url(#fc-wall)" />
      <path d={`${WALL}${OPENING}`} fillRule="evenodd" fill="url(#fc-stone)" />
      <path d={`${WALL}${OPENING}`} fillRule="evenodd" fill="url(#fc-light)" />

      {/* Plinth and threshold */}
      <path d="M-1200 972H2800V2200H-1200Z" fill="#E6D7BD" />
      <path d="M-1200 972.5H2800" stroke={c.khaki400} />
      <path d="M632 952H968V972H632Z" fill="#EFE4D0" stroke={c.khaki400} />

      {/* Pishtaq: the tall framed portal */}
      <path d={crestRow(556, 418, 488, 15)} fill={c.sand50} stroke={c.khaki400} strokeWidth="1.5" />
      <path d={`M556 416H1044V1000H556Z${OPENING}`} fillRule="evenodd" fill={c.sand50} />
      <path d="M556 1000V416H1044V1000" fill="none" stroke={c.khaki400} strokeWidth="2" />
      <path d="M570 430H1030V1000H570ZM594 454H1006V1000H594Z" fillRule="evenodd" fill="url(#fc-band)" />
      <path d="M570 1000V430H1030V1000M594 1000V454H1006V1000" fill="none" stroke={c.cobalt300} strokeWidth="1.5" />

      {/* Inscription frieze */}
      <rect x="610" y="470" width="380" height="42" rx="3" fill={c.cobalt500} />
      <rect x="616" y="476" width="368" height="30" rx="2" fill="none" stroke={c.cobalt200} strokeOpacity="0.6" />
      <text
        x="800"
        y="497.5"
        textAnchor="middle"
        fill={c.sand50}
        fontSize="19"
        letterSpacing="9"
        style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
      >
        HOŞ GELDİNİZ
      </text>

      {/* Tulip-tiled spandrels around the arch */}
      <path d={`M610 524H990V1000H610Z${OPENING}`} fillRule="evenodd" fill="url(#fc-spandrel)" />
      <path d="M610 1000V524H990V1000" fill="none" stroke={c.khaki400} strokeWidth="1.2" />

      {/* Rosettes in the spandrel corners */}
      {[656, 944].map((x) => (
        <g key={x}>
          <circle cx={x} cy="572" r="24" fill={c.turq200} stroke={c.cobalt300} strokeWidth="1.5" />
          <g fill={c.cobalt300}>
            <rect x={x - 11} y="561" width="22" height="22" />
            <rect x={x - 11} y="561" width="22" height="22" transform={`rotate(45 ${x} 572)`} />
          </g>
          <circle cx={x} cy="572" r="5" fill={c.rose300} />
        </g>
      ))}

      {/* Jambs with engaged colonettes */}
      <g fill={c.sand50} stroke={c.khaki400} strokeWidth="1.2">
        <rect x="610" y="760" width="40" height="192" />
        <rect x="950" y="760" width="40" height="192" />
      </g>
      <g fill={c.sand200} stroke={c.khaki400}>
        <rect x="621" y="774" width="18" height="178" rx="9" />
        <rect x="961" y="774" width="18" height="178" rx="9" />
      </g>
      <g fill={c.turq300} stroke={c.cobalt300}>
        <rect x="615" y="760" width="30" height="12" rx="2" />
        <rect x="955" y="760" width="30" height="12" rx="2" />
      </g>

      {/* Ablaq voussoirs: alternating rose and sand around the arch */}
      <path d={BAND_ARC} fill="none" stroke={c.sand50} strokeWidth="30" />
      <path d={BAND_ARC} fill="none" stroke={c.rose300} strokeWidth="30" strokeDasharray="15.78 15.78" />
      <path d={OUTER_ARC} fill="none" stroke={c.khaki500} strokeWidth="1.6" />
      <path d={INNER_ARC} fill="none" stroke={c.khaki500} strokeWidth="1.6" />

      {/* A kandil lamp hanging in the doorway */}
      <g className="kandil">
        <path d="M800 560V607" stroke={c.khaki500} strokeWidth="1.5" />
        <circle cx="800" cy="638" r="58" fill="url(#fc-glow)" />
        <path d="M790 606H810L806 614H794Z" fill={c.khaki400} />
        <path
          d="M800 614C817 620 823 635 818 648C814 657 807 661 800 663C793 661 786 657 782 648C777 635 783 620 800 614Z"
          fill={c.turq200}
          stroke={c.cobalt300}
          strokeWidth="1.5"
        />
        <path d="M785 637H815" stroke={c.rose300} strokeWidth="2.5" />
        <circle cx="800" cy="668" r="2.8" fill={c.khaki500} />
      </g>

      {/* Cypresses in tiled pots flanking the gate */}
      <Cypress x={508} top={748} bottom={938} w={30} />
      <Pot x={508} y={930} />
      <Cypress x={1092} top={748} bottom={938} w={30} />
      <Pot x={1092} y={930} />
    </svg>
  );
}

export function CourtyardLayer() {
  const bays = Array.from({ length: 17 }, (_, i) => 800 + (i - 8) * 112);
  return (
    <svg viewBox={VIEW} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden focusable="false">
      <defs>
        <linearGradient id="cy-sky" gradientUnits="userSpaceOnUse" x1="0" y1="180" x2="0" y2="820">
          <stop offset="0" stopColor="#EAD3BF" />
          <stop offset="0.55" stopColor="#F3E4D3" />
          <stop offset="1" stopColor="#F8EFE3" />
        </linearGradient>
        <clipPath id="cy-floor">
          <rect x="-400" y="812" width="2400" height="600" />
        </clipPath>
        <pattern id="cy-tile" width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill={c.turq200} />
          <g fill={c.turq300}>
            <rect x="4.5" y="4.5" width="7" height="7" />
            <rect x="4.5" y="4.5" width="7" height="7" transform="rotate(45 8 8)" />
          </g>
          <circle cx="8" cy="8" r="1.4" fill={c.sand50} />
        </pattern>
      </defs>

      <rect x="-400" y="-400" width="2400" height="1800" fill="url(#cy-sky)" />

      {/* Low sun behind the dome */}
      <circle cx="800" cy="468" r="170" fill="#F7DEC2" opacity="0.45" />
      <circle cx="800" cy="468" r="76" fill="#F5D3AF" opacity="0.95" />

      {/* Clouds */}
      <g fill="#FBF5EC" opacity="0.9">
        <ellipse cx="470" cy="318" rx="78" ry="16" />
        <ellipse cx="520" cy="304" rx="46" ry="16" />
        <ellipse cx="1120" cy="286" rx="92" ry="17" />
        <ellipse cx="1080" cy="272" rx="50" ry="15" />
        <ellipse cx="1270" cy="380" rx="60" ry="11" />
      </g>

      {/* Birds */}
      <g fill="none" stroke="#9A8C7A" strokeWidth="2" strokeLinecap="round">
        <path className="bird" d="M612 376q7-7 14 0q7-7 14 0" />
        <path className="bird" d="M660 352q6-6 12 0q6-6 12 0" />
        <path className="bird" d="M1010 332q7-7 14 0q7-7 14 0" />
      </g>

      {/* Distant mosque: dome, half-domes and minarets */}
      <g>
        {[548, 1052].map((x) => (
          <g key={x} fill="#D6DDEB">
            <rect x={x - 7} y="470" width="14" height="232" />
            <path d={`M${x - 8} 470L${x} 426L${x + 8} 470Z`} />
            <rect x={x - 11} y="540" width="22" height="5" fill="#C9D2E4" />
          </g>
        ))}
        {[616, 984].map((x) => (
          <g key={x} fill="#C6CFE3">
            <rect x={x - 8} y="420" width="16" height="282" />
            <path d={`M${x - 9} 420L${x} 366L${x + 9} 420Z`} />
            <rect x={x - 13} y="498" width="26" height="6" fill="#B8C4DC" />
            <rect x={x - 12} y="580" width="24" height="6" fill="#B8C4DC" />
          </g>
        ))}
        <path d="M596 702A74 74 0 0 1 744 702Z" fill="#D2DAEA" />
        <path d="M856 702A74 74 0 0 1 1004 702Z" fill="#D2DAEA" />
        <rect x="676" y="648" width="248" height="54" fill="#C3CDE2" />
        <path d="M692 650A108 108 0 0 1 908 650Z" fill={c.cobalt200} />
        <path d="M800 542V510" stroke="#B3BFD9" strokeWidth="3" />
        <circle cx="800" cy="505" r="5.5" fill="#B3BFD9" />
        {Array.from({ length: 7 }, (_, i) => 704 + i * 32).map((x) => (
          <path key={x} d={`M${x} 692V674C${x} 668 ${x + 6} 664 ${x + 8} 662C${x + 10} 664 ${x + 16} 668 ${x + 16} 674V692Z`} fill="#E4E9F3" />
        ))}
      </g>

      {/* Courtyard portico: a row of small domes over pointed arches */}
      {bays.map((x) => (
        <g key={x}>
          <path d={`M${x - 40} 702A40 40 0 0 1 ${x + 40} 702Z`} fill="#EADFCC" stroke="#D6C6A8" />
          <path d={`M${x} 662V648`} stroke="#D6C6A8" strokeWidth="2" />
        </g>
      ))}
      <rect x="-400" y="700" width="2400" height="112" fill="#F3E9D9" />
      <rect x="-400" y="700" width="2400" height="7" fill="#E2D3B8" />
      {bays.map((x) => (
        <g key={x}>
          <path d={`M${x - 36} 812V766A48 48 0 0 1 ${x} 719.5A48 48 0 0 1 ${x + 36} 766V812Z`} fill="#DECDB1" />
          <circle cx={x} cy="746" r="3" fill={c.rose300} />
        </g>
      ))}

      {/* Floor in perspective */}
      <rect x="-400" y="812" width="2400" height="600" fill="#EADCC5" />
      <g clipPath="url(#cy-floor)" stroke="#D6C4A4" strokeWidth="1.2" opacity="0.8">
        {Array.from({ length: 25 }, (_, i) => (i - 12) * 480).map((dx) => (
          <path key={dx} d={`M800 700L${800 + dx} 1300`} />
        ))}
        {[836, 866, 906, 960, 1032].map((y) => (
          <path key={y} d={`M-400 ${y}H2000`} />
        ))}
      </g>
      <path d="M770 812H830L912 1000H688Z" fill="#F4EBDD" stroke="#D6C4A4" />
      <path d="M786 812H814L862 1000H738Z" fill="none" stroke={c.turq300} strokeWidth="1.5" strokeDasharray="6 6" />

      {/* Back cypresses and tulip beds */}
      <Cypress x={588} top={650} bottom={860} w={26} />
      <Cypress x={1012} top={650} bottom={860} w={26} />
      {[536, 560, 612, 636, 964, 988, 1040, 1064].map((x, i) => (
        <TulipGlyph
          key={x}
          transform={`translate(${x - 10} 842) scale(1.1)`}
          petal={i % 2 ? c.rose300 : c.turq300}
          deep={i % 2 ? c.rose500 : c.turq500}
          leaf={c.sage500}
        />
      ))}

      {/* Şadırvan: the ablutions fountain at the heart of the courtyard */}
      <g>
        <ellipse cx="800" cy="906" rx="130" ry="12" fill="#D9C8AA" opacity="0.6" />
        <path d="M694 851L736 856V906L694 898Z" fill="#B7D8D2" />
        <path d="M906 851L864 856V906L906 898Z" fill="#B7D8D2" />
        <rect x="736" y="856" width="128" height="50" fill="url(#cy-tile)" />
        <path d="M694 851L736 856V906L694 898ZM906 851L864 856V906L906 898Z" fill="url(#cy-tile)" opacity="0.6" />
        <path d="M736 856V906M864 856V906" stroke={c.cobalt300} />
        <rect x="688" y="843" width="224" height="12" rx="4" fill="#F7EFE2" stroke="#CDBB98" />
        {[708, 754, 846, 892].map((x) => (
          <rect key={x} x={x - 3.5} y="772" width="7" height="72" fill="#F7EFE2" stroke="#CDBB98" />
        ))}
        <path d="M672 778Q736 768 764 738Q788 710 800 688Q812 710 836 738Q864 768 928 778Z" fill={c.cobalt300} />
        <path d="M700 772Q760 758 784 720" fill="none" stroke={c.cobalt200} strokeWidth="3" opacity="0.8" />
        <rect x="676" y="772" width="248" height="10" rx="2" fill="#8EA2CC" />
        <path d="M800 688V664" stroke="#8EA2CC" strokeWidth="3" />
        <circle cx="800" cy="659" r="5.5" fill={c.rose300} />
      </g>

      {/* Near cypresses frame the view once you are inside */}
      <Cypress x={318} top={520} bottom={968} w={46} />
      <Cypress x={1282} top={520} bottom={968} w={46} />
    </svg>
  );
}
