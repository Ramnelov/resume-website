import { Component, For, Show, createResource } from "solid-js";
import { ExperienceCard } from "~/components/experience-card";
import { fetchExperienceData } from "~/data/data";
import { sortByDate } from "~/utils/dates";

const [experienceData] = createResource(fetchExperienceData);

export const Experience: Component = () => {
  return (
    <>
      <Show
        when={!experienceData.error}
        fallback={<p class="text-gray-400">Error fetching experience data.</p>}
      >
        <For each={experienceData()?.sort(sortByDate)}>
          {(experience) => (
            <div class="pb-5">
              <ExperienceCard {...experience} />
            </div>
          )}
        </For>
      </Show>
    </>
  );
};
