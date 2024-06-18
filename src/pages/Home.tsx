import { Component, createResource } from "solid-js";
import { Image } from "@kobalte/core";
import { FiLoader } from "solid-icons/fi";
import { fetchResumeTextData } from "~/data/data";

export const Home: Component = () => {
  const fetchResumeSummaryData = () => fetchResumeTextData("summary");

  const [resumeSummary] = createResource(fetchResumeSummaryData);

  return (
    <div class="flex flex-col items-center justify-center text-center font-titillium pb-8">
      <Image.Root>
        <Image.Img
          src={import.meta.env.VITE_PROFILE_PICTURE_URL as string}
          class="rounded-lg object-cover w-64 h-64"
        />
        <Image.Fallback class="flex h-64 items-center justify-center">
          <FiLoader class="mx-auto size-10 animate-spin" />
        </Image.Fallback>
      </Image.Root>
      <p class="max-w-80 pt-5">{resumeSummary()}</p>
    </div>
  );
};
