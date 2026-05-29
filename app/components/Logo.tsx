import Image from "next/image";
import Link from "next/link";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="logo" aria-label="Peksan Metal anasayfa">
      <span className="logo-mark" aria-hidden="true">
        <Image
          src="/logo.jpg"
          alt="Peksan Metal logo"
          width={38}
          height={38}
          className="logo-img"
          priority
        />
      </span>
      <span>
        PEKSAN METAL<small>SINCE 1980 · İSTANBUL</small>
      </span>
    </Link>
  );
}
