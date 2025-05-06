import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-emerald-500">
      <div className="container m-auto">
        <Link href="/">
          <Image
            alt="logo"
            className="w-20 h-20"
            src="/icon.png"
            width={100}
            height={100}
          />
        </Link>
        <ul className="flex flex-row">
          <Link href={""}>Home</Link>
          <Link href={""}>Subscibe</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Sign up</Link>
        </ul>
      </div>
    </nav>
  );
}
