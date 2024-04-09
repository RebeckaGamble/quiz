import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div className="w-screen fixed h-10 bg-white text-black/90 shadow-xl z-[9999]">
      <div className="flex items-center h-full flex-row px-4 sm:px-6">
        <ul className="flex flex-row w-full justify-center gap-4 sm:gap-8 md:gap-10 items-center">
          <li>
            <Link
              href="/"
              className="font-semibold sm:tracking-wider text-[16px] md:text-[18px] tracking-wider hover:underline"
            >
              Start
            </Link>
          </li>
          <li>
            <Link
              href="/game"
              className="font-semibold sm:tracking-wider text-[16px] md:text-[18px] tracking-wider hover:underline"
            >
              Quiz
            </Link>
          </li>
          <li>
            <Link
              href="/adminCont"
              className="font-semibold sm:tracking-wider text-[16px] md:text-[18px] tracking-wider hover:underline"
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
