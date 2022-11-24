import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav id="top" className="w-full sticky top-0 flex justify-between items-center bg-[#2096c6] py-6 px-20 text-white bg-image">
      <div className="flex items-center gap-4">
        <Image
          src="/country_code_logo.png"
          alt="Country Code Logo"
          width={48}
          height={48}
        />
        <p> Country Code Checker </p>
      </div>
      <ul className="flex gap-20">
        <Link href="#top"> Home </Link>
        <Link href="#bottom"> About </Link>
        <Link href="#bottom"> Contact </Link>
      </ul>
    </nav>
  );
}
