import { Component } from "solid-js";

export const Home: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center text-center font-titillium">
      <h1 class="text-5xl glow">Welcome!</h1>
      <p class="text-xl">... to my resume website</p>
      <p class="pt-5 max-w-80">
        This is a side project of mine, developing a SPA and PWA that can be used as a
        resume.
      </p>
      <p class="pt-5 max-w-80">
        Feel free to look around, click the menu icon in the top left.
      </p>
    </div>
  );
};
