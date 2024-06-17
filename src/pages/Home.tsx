import { Component } from "solid-js";
import { Image } from "@kobalte/core";
import { FiLoader } from "solid-icons/fi";

export const Home: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center text-center font-titillium pb-8">
      <Image.Root>
        <Image.Img
          src="/images/felix-2.jpg"
          class="rounded-lg object-cover w-64 h-64"
        />
        <Image.Fallback class="flex h-64 items-center justify-center">
          <FiLoader class="mx-auto size-10 animate-spin" />
        </Image.Fallback>
      </Image.Root>
      <p class="max-w-80 pt-5">
        Hello! My name is Felix Ramnelöv, a 23-year-old enthusiastic third year
        M.Sc. student in CSE. I have various experiences ranging from web
        development to administration. My goals in the professional world
        include continuously developing my skills and learning something new
        every day.
      </p>
    </div>
  );
};
