"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const NavLinks = [
    { name: "Home", href: "/" },
    { name: "auth", href: "/auth" },
    { name: "profile", href: "/profile" },
    { name: "subscribe", href: "/subscribe" }
  ];
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("mobile menu", mobileMenuOpen);
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-1 md:px-6 transition-all duration-300 ${
        isScrolled
          ? "bg-background/20 backdrop-blur-md shadow-md"
          : "bg-emerald-400"
      }`}
    >
      <div className="container m-auto">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              alt="logo"
              className="w-20 h-20"
              src="/icon.png"
              width={100}
              height={100}
            />
          </Link>
          <div className="hidden md:flex justify-between gap-4 ">
            {NavLinks.map((navlinks) => (
              <Link key={navlinks.name} href={navlinks.href}>
                {navlinks.name}
              </Link>
            ))}
          </div>
          {/* mobile menu */}
          <div className="md:hidden flex items-center  hover:cursor-pointer ">
            <div
              className="w-10 h-10 border-2 mr-4 shadow-2xl rounded-md
            flex justify-center flex-col gap-y-1 p-2 z-50"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <div
                className={`h-1 bg-black transition-transform duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>

              <div
                className={`h-1 bg-black transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>

              <div
                className={`h-1 bg-black transition-transform duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`fixed top-0 left-0 w-full bg-background/95 backdrop-blur-md z-50 transform 
                  transition-all duration-500 ease-in-out ${
                    mobileMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-full opacity-0 pointer-events-none"
                  }`}
              >
                <div className="py-4 flex flex-col">
                  {NavLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen((prev) => !prev)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
