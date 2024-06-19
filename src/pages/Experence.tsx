import { Component, For, createResource } from "solid-js";
import { ExperienceCard } from "~/components/experience-card";
import { fetchExperienceData } from "~/data/data";
import { sortByDate } from "~/utils/dates";

export const Experience: Component = () => {
  const [experienceData] = createResource(fetchExperienceData);

  return (
    <>
      <For each={experienceData()?.sort(sortByDate)}>
        {(experience) => (
          <div class="pb-5">
            <ExperienceCard {...experience} />
          </div>
        )}
      </For>
    </>
  );
};
