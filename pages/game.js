import React from "react";
import TheGame from "./components/game/TheGame";
import Nav from "./components/header/Nav";

function game() {
  return (
    <>
      <Nav />
      <div
        className="max-w-screen items-center flex flex-col"
        style={{ height: "calc(100vh - 80px" }}
      >
        <div className="mx-auto sm:mt-20">
          <TheGame />
        </div>
      </div>
    </>
  );
}

export default game;
