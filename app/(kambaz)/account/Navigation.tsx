"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const links = [
    { label: "Signin", path: "/account/signin", id: "wd-account-signin-link" },
    { label: "Signup", path: "/account/signup", id: "wd-account-signup-link" },
    { label: "Profile", path: "/account/profile", id: "wd-account-profile-link" },
  ];
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.path}
          id={link.id}
          className={
            pathname === link.path
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
