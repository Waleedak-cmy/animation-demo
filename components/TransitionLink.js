"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/pages/animation";
import Link from "next/link";

export default function TransitionLink({ href, label }) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <Link href={href}
      className="border-[1px] border-black p-4 rounded-xl hover:bg-black hover:text-neutral-100 cursor-pointer"
      onClick={handleClick}
    >
      {label}
    </Link>
  );
}
