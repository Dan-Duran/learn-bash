"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean;
  activeClassName?: string;
  disabled?: boolean;
  exact?: boolean;
};

export default function Anchor({
  absolute,
  className = "",
  activeClassName = "",
  disabled,
  exact = false,
  children,
  ...props
}: AnchorProps) {
  const path = usePathname();
  let isMatch;

  if (exact) {
    isMatch = path === props.href.toString();
  } else if (absolute) {
    isMatch = props.href.toString().split("/")[1] === path.split("/")[1];
  } else {
    isMatch = path.startsWith(props.href.toString());
  }

  if (props.href.toString().includes("http")) isMatch = false;

  if (disabled)
    return (
      <div className={cn(className, "cursor-not-allowed")}>{children}</div>
    );
    
  return (
    <Link className={cn(className, isMatch && activeClassName)} {...props}>
      {children}
    </Link>
  );
}