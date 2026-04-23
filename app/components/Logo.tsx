import Link from "next/link";

export function Logo({ href = "#top" }: { href?: string }) {
  return (
    <Link href={href} className="logo" aria-label="Peksan Metal anasayfa">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18.5" stroke="#c9a961" strokeWidth="1" />
          <circle cx="20" cy="20" r="14" stroke="#c9a961" strokeWidth=".5" opacity=".5" />
          <text
            x="20"
            y="24.5"
            textAnchor="middle"
            fontFamily="Cormorant Garamond, serif"
            fontSize="13"
            fontWeight="500"
            fill="#c9a961"
            letterSpacing="1"
          >
            PM
          </text>
        </svg>
      </span>
      <span>
        PEKSAN METAL<small>EST. 1978 · İSTANBUL</small>
      </span>
    </Link>
  );
}
