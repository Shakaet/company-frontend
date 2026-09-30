import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({ href, children, variant = "primary", type = "button", onClick }: Props) {
  const cls =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-blue-600 text-blue-600 hover:bg-blue-50";

  const base = `inline-block px-5 py-2.5 rounded-lg font-medium transition ${cls}`;

  if (href) return <Link href={href} className={base}>{children}</Link>;
  return <button type={type} onClick={onClick} className={base}>{children}</button>;
}