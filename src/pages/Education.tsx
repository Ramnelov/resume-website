import { Component, For, Show, createResource } from "solid-js";
import { EducationCard } from "~/components/education-card";
import { fetchEducationData } from "~/data/data";
import { sortByDate } from "~/utils/dates";

export const Education: Component = () => {
  const [educationData] = createResource(fetchEducationData);

  return (
    <>
      <Show
        when={!educationData.error}
        fallback={<p class="text-gray-400">Error fetching education data.</p>}
      >
        <For each={educationData()?.sort(sortByDate)}>
          {(education) => (
            <div class="pb-5">
              <EducationCard {...education} />
            </div>
          )}
        </For>
      </Show>
    </>
  );
};
