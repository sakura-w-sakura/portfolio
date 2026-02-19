"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-extrabold text-xl tracking-tight text-gray-900"
        >
          Madelyn Torff
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <ul className="flex flex-col px-8 py-4 gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
