"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, useUser, SignOutButton } from "@clerk/nextjs";
export default function Navbar() {
  const NavLinks = [
    { name: "Home", href: "/" },
    { name: "Sign-Up", href: "/auth" },
    { name: "profile", href: "/profile" },
    { name: "subscribe", href: "/subscribe" }
  ];
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { isSignedIn, user, isLoaded } = useUser();
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
    console.log("mobile menu", user);
  }, [user]);
  if (!isLoaded) return <p>Loading.....</p>;
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-1 md:px-6 transition-all duration-200
         text-Light-Gray ${
           isScrolled
             ? "backdrop-blur-sm shadow-lg text-coal"
             : "bg-green-400  flex"
         }`}
    >
      <div className="container m-auto">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex justify-center items-center rounded-full w-15 h-15"
          >
            <Image
              alt="logo"
              className="w-15 h-15"
              src={`${isScrolled ? "/MealPlanner.png" : "/icon.png"}`}
              width={100}
              height={100}
            />
          </Link>

          <div className="hidden uppercase font-bold md:flex justify-between items-center gap-4 ">
            <SignedOut>
              <Link
                href="/"
                className={`duration-200 ${
                  pathname === "/" ? "font-bold border-b" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/auth"
                className={`duration-200 ${
                  pathname === "/auth" ? "font-bold border-b" : ""
                }`}
              >
                Sign-up
              </Link>
            </SignedOut>
            <SignedIn>
              <Link
                href="/profile"
                className={`duration-200 ${
                  pathname === "/profile" ? "font-bold border-b" : ""
                }`}
              >
                Profile
              </Link>
              <Link
                href={isSignedIn ? "/subscribe" : "/auth"}
                className={`duration-200 ${
                  pathname === "/subscribe" ? "font-bold border-b" : ""
                }`}
              >
                subscribe
              </Link>
              <Link href="/">
                <Image
                  width={20}
                  height={20}
                  src={user?.imageUrl ? user?.imageUrl : ""}
                  alt="profile image"
                  className="w-10 h-10 rounded-full"
                />
              </Link>
              <SignOutButton>
                <button className="py-2 px-3 bg-white rounded-2xl border text-green-400 hover:bg-green-400 hover:text-white hover:border hover:border-white duration-300">
                  Signout{" "}
                </button>
              </SignOutButton>
            </SignedIn>
          </div>
          {/* mobile menu */}
          <div className="md:hidden flex items-center hover:cursor-pointer z-50">
            <div
              className="w-10 h-10 border-2 mr-4 shadow-2xl rounded-md
            flex justify-center flex-col gap-y-1 p-2"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <div
                className={`h-1 bg-Light-Gray transition-transform duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>

              <div
                className={`h-1 bg-Light-Gray transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>

              <div
                className={`h-1 bg-Light-Gray transition-transform duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`fixed bg-background/0 top-0 left-0 w-full  backdrop-blur-md z-50 transform 
                  transition-all duration-500 ease-in-out ${
                    mobileMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-full opacity-0 pointer-events-none"
                  }`}
              >
                <div className="py-4 px-3 flex gap-y-4 flex-col z-40">
                  <Link href="/">
                    <Image
                      alt="logo"
                      className="w-20 h-20 ml-3"
                      src="/MealPlanner.png"
                      width={100}
                      height={100}
                    />
                  </Link>
                  <SignedOut>
                    <Link
                      href="/"
                      className={`duration-200 ${
                        pathname === "/"
                          ? "font-bold text-black border-b"
                          : "text-gray-800"
                      }`}
                    >
                      Home
                    </Link>
                    <Link
                      href={isSignedIn ? "/subscribe" : "/auth"}
                      className={`duration-200 ${
                        pathname === "/subscribe"
                          ? "font-bold text-black border-b"
                          : "text-gray-800"
                      }`}
                    >
                      subscribe
                    </Link>
                    <Link
                      href="/auth"
                      className={`duration-200 ${
                        pathname === "/auth"
                          ? "font-bold text-black border-b"
                          : "text-gray-800"
                      }`}
                    >
                      Sign-up
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <Link
                      href="/profile"
                      className={`duration-200 ${
                        pathname === "/profile"
                          ? "font-bold text-black border-b"
                          : "text-gray-800"
                      }`}
                    >
                      Profile
                    </Link>
                    <Link href="/">
                      <Image
                        width={20}
                        height={20}
                        src={user?.imageUrl ? user?.imageUrl : ""}
                        alt="profile image"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <SignOutButton>
                      <button className="py-2 px-3 bg-white rounded-2xl border-0 text-green-400 hover:bg-green-400 hover:text-white hover:border hover:border-white duration-300">
                        Signout{" "}
                      </button>
                    </SignOutButton>
                  </SignedIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
