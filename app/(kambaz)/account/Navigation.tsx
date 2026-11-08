"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";
import "../kambaz.css";

const SIGNED_OUT_LINKS = [
  { label: "Signin", path: "/account/signin", id: "wd-account-signin-link" },
  { label: "Signup", path: "/account/signup", id: "wd-account-signup-link" },
];

const SIGNED_IN_LINKS = [
  { label: "Profile", path: "/account/profile", id: "wd-account-profile-link" },
];

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const pathname = usePathname() ?? "";
  const links = currentUser ? SIGNED_IN_LINKS : SIGNED_OUT_LINKS;
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
