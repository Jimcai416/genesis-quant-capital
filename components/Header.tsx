'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/strategies", label: "Strategies" },
  { href: "/research", label: "Research" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-std flex items-center justify-between py-4">
        <Link className="flex items-center gap-3" href="/">
          <Image src="/logo.svg" alt="Genesis Quant Capital" width={32} height={32} />
          <span className="font-semibold">Genesis Quant Capital</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(n => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-sm ${pathname === n.href ? "text-slate-900 font-medium" : "text-slate-600 hover:text-slate-900"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
