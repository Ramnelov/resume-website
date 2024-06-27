import { Component } from "solid-js";
import { Image } from "@kobalte/core";
import { FiLoader } from "solid-icons/fi";
import { useResumeData } from "~/data/data-context";

export const Home: Component = () => {
  const resumeDataResource = useResumeData();

  return (
    <>
      <Image.Root>
        <Image.Img
          src={resumeDataResource()?.links["profile-picture"]}
          class="mx-auto h-64 w-64 rounded-lg object-cover"
        />
        <Image.Fallback class="flex h-64 items-center justify-center">
          <FiLoader class="mx-auto size-10 animate-spin" />
        </Image.Fallback>
      </Image.Root>

      <p class="pt-5">{resumeDataResource()?.texts["summary"]}</p>
    </>
  );
};
