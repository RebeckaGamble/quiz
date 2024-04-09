import React from "react";
import Link from "next/link";

export default function Home() {
  /**<li>
            <Link href="/gameLocal">Game Local</Link>
          </li>
          <li>
            <Link href="/adminLocal">Admin Local</Link>
          </li> */
  return (
    <>
      <div
        className="flex flex-col items-center justify-center max-w-screen"
        style={{ height: "calc(100vh - 80px" }}
      >
        <h1 className=" text-2xl sm:text-4xl font-bold mb-6">
          Welcome to the Quiz
        </h1>
        <div className="flex space-x-4">
          <Link
            href="/game"
            className="inline-block w-[80px] text-center bg-purple-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-md"
          >
            Quiz
          </Link>
          <Link
            href="/adminCont"
            className="inline-block w-[80px] text-center bg-green-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
          >
            Admin
          </Link>
        </div>
      </div>
    </>
  );
}
