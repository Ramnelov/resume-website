import { Component, For, createResource } from "solid-js";
import { EducationCard } from "~/components/education-card";
import { fetchEducationData } from "~/data/data";
import { sortByDate } from "~/utils/dates";

export const Education: Component = () => {
  const [educationData] = createResource(fetchEducationData);

  return (
    <>
      <For each={educationData()?.sort(sortByDate)}>
        {(education) => (
          <div class="pb-5">
            <EducationCard {...education} />
          </div>
        )}
      </For>
    </>
  );
};
