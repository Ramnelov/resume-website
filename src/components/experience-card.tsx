import { Component } from "solid-js";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ExperienceData } from "~/data/data-types";
import { formatDate } from "~/utils/dates";

export const ExperienceCard: Component<ExperienceData> = (experience) => {
  return (
    <>
      <a href={experience.link ?? undefined} target="_blank">
        <Card class="transition-opacity duration-300 ease-in-out hover:opacity-50">
          <CardHeader>
            <CardTitle class="text-xl">{experience.company}</CardTitle>
            <CardDescription>
              <h3 class="text-lg">{experience.role}</h3>
              <p class="text-md">{experience.location}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p class="pb-1 text-sm">
              {formatDate(experience.start_date)} -{" "}
              {formatDate(experience.end_date)}
            </p>
            <p class="text-sm">{experience.description}</p>
          </CardContent>
        </Card>
      </a>
    </>
  );
};
