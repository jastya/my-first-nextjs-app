"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/register", name: "Register" },
  { href: "/login", name: "Login" },
  { href: "/forgot-password", name: "Forgot Password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [input, setinput] = useState("");

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      {navLinks.map((link, index) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            className={
              isActive ? "font-bold mr-4" : "text-blue-500 underline mr-4"
            }
            key={index}
            href={`${link.href}`}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
