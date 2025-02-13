"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children, activeClassName, className, ...props }) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  const activeClass = isActive ? activeClassName : "";
  const linkCN = cn(className, activeClass);

  return (
    <Link href={href} className={linkCN} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
