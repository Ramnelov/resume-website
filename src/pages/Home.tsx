import { Component, createResource } from "solid-js";
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
      <Image.Root>
        <Image.Img
          src={profilePictureLink()}
          class="rounded-lg object-cover w-64 h-64 mx-auto"
        />
        <Image.Fallback class="flex h-64 items-center justify-center">
          <FiLoader class="mx-auto size-10 animate-spin" />
        </Image.Fallback>
      </Image.Root>
      <p class="pt-5">{resumeSummary()}</p>
    </>
  );
};
