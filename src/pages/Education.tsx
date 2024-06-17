import { Component, For, createResource } from "solid-js";
import { EducationCard } from "~/components/education-card";
import { fetchEducationData } from "~/data/data";

export const Education: Component = () => {
  const [educationData] = createResource(fetchEducationData);

  return (
    <div class="flex flex-col educations-center justify-center text-center font-titillium pb-3">
      <For each={educationData()}>
        {(education) => (
          <div class="pb-5 max-w-80">
            <EducationCard {...education} />
          </div>
        )}
      </For>
    </div>
  );
};
