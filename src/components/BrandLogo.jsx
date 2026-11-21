/*
  BrandLogo — the nav logo component.
  Renders the ">_" prompt mark beside the full name.
  Used by Navbar (centred, nav-split) and anywhere else the brand needs a lockup.
*/
export default function BrandLogo({ href = '#top', onClick }) {
  return (
    <a
      className="nav__logo brand-logo"
      href={href}
      onClick={onClick}
      aria-label="Jude Almaden — back to top"
    >
      <PromptMark />
      <span>Jude Almaden</span>
    </a>
  );
}

/* ----------------------------------------------------------------
   PromptMark — ">_" terminal prompt symbol.
   Precision 30° chevron + underscore.
   Drawn with var(--accent, #1a4be0) so it responds to page tokens.
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
        stroke="var(--accent, #1a4be0)"
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
        fill="var(--accent, #1a4be0)"
      />
    </svg>
  );
}

