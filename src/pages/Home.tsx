import { Component, Show, createResource } from "solid-js";
import { Image } from "@kobalte/core";
import { FiLoader } from "solid-icons/fi";
import { fetchImageLinkData, fetchResumeTextData } from "~/data/data";

export const Home: Component = () => {
  const fetchResumeSummaryData = () => fetchResumeTextData("summary");
  const fetchProfilePictureLinkData = () =>
    fetchImageLinkData("profile-picture");

  const [resumeSummary] = createResource(fetchResumeSummaryData);
  const [profilePictureLink] = createResource(fetchProfilePictureLinkData);

  return (
    <>
      <Show
        when={!profilePictureLink.error}
        fallback={
          <p class="flex h-64 items-center justify-center text-gray-400">
            Error fetching image link.
          </p>
        }
      >
        <Image.Root>
          <Image.Img
            src={profilePictureLink()}
            class="rounded-lg object-cover w-64 h-64 mx-auto"
          />
          <Image.Fallback class="flex h-64 items-center justify-center">
            <FiLoader class="mx-auto size-10 animate-spin" />
          </Image.Fallback>
        </Image.Root>
      </Show>
      <Show
        when={!resumeSummary.error}
        fallback={
          <p class="pt-5 text-gray-400">Error fetching summary text.</p>
        }
      >
        <p class="pt-5">{resumeSummary()}</p>
      </Show>
    </>
  );
};
