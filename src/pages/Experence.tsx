import { Component, For, Show, createResource } from "solid-js";
import { ExperienceCard } from "~/components/experience-card";
import { fetchExperienceData } from "~/data/data";
import { sortByDate } from "~/utils/dates";

export const Experience: Component = () => {
  const [experienceData] = createResource(fetchExperienceData);

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
