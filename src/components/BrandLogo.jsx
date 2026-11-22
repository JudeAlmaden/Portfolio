/*
  BrandLogo — the nav logo component.
  Renders the ">_" prompt mark beside the full name.
  Violet-themed version for dark theme portfolio.
*/
export default function BrandLogo({ href = '#', onClick }) {
  return (
    <a
      className="brand-logo"
      href={href}
      onClick={onClick}
      aria-label="Jude Almaden — back to top"
    >
      <PromptMark />
      <span className="brand-logo__text">Jude Almaden</span>
    </a>
  );
}

/* ----------------------------------------------------------------
   PromptMark — ">_" terminal prompt symbol.
   Precision 30° chevron + underscore.
   Violet color (#a78bfa / #c4b5fd) for dark theme.
*/
function PromptMark() {
  return (
    <svg
      className="brand-logo__mark"
      width="28"
      height="28"
      viewBox="0 0 256 256"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M46 64 L157 128 L46 192"
        stroke="#a78bfa"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="173"
        y="196"
        width="52"
        height="22"
        rx="11"
        fill="#a78bfa"
      />
    </svg>
  );
}
