import TransitionLink from "@/components/TransitionLink";
import React from "react";
import Template from "./template";

export default function Home() {
    return (
      
      <main className="bg-white text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
        <Template/>
        <h1 className="text-5xl text-[91px]">HOME PAGE</h1>
        <TransitionLink href="/about" label="About ->" />
      </main>
    );
  }