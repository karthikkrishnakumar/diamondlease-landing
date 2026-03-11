import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { name: "Facebook", href: "#", label: "Visit Diamondlease on Facebook" },
  { name: "Instagram", href: "#", label: "Visit Diamondlease on Instagram" },
  { name: "X", href: "#", label: "Visit Diamondlease on X (Twitter)" },
  { name: "LinkedIn", href: "#", label: "Visit Diamondlease on LinkedIn" },
];

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-4 sm:px-8">
      <div className="flex items-center">
        <Link href="/" className="flex items-center" aria-label="Diamondlease Car Rental home">
          <div className="relative h-8 w-32 sm:h-10 sm:w-40">
            <Image
              src="/images/logo.png"
              alt="Diamondlease Car Rental logo"
              fill
              sizes="160px"
              className="object-contain"
              priority
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

