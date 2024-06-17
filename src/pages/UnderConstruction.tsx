import { Component } from "solid-js";
import { FiTool } from "solid-icons/fi";

export const UnderConstruction: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center text-center font-titillium pb-8">
      <FiTool class="mx-auto size-10" />
      <div class="max-w-80">This page is under construction.</div>
    </div>
  );
};
