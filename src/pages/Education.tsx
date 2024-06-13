import { Component, For } from "solid-js";
import educationData from "~/data/education.json";
import { EducationCard } from "~/components/education-card";

export const Education: Component = () => {
  return (
    <div class="flex flex-col educations-center justify-center text-center font-titillium pb-3">
      <For each={educationData}>
        {(education) => (
          <div class="pb-5 max-w-80">
            <EducationCard {...education} />
          </div>
        )}
      </For>
    </div>
  );
};
