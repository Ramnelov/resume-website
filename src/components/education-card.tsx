import { Component } from "solid-js";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { EducationData } from "~/data/data-types";
import { formatDate } from "~/utils/dates";

export const EducationCard: Component<EducationData> = (education) => {
  return (
    <>
      <a href={education.link} target="_blank">
        <Card class="transition-opacity duration-300 ease-in-out hover:opacity-50">
          <CardHeader>
            <CardTitle class="text-xl">{education.level}</CardTitle>
            <CardDescription>
              <h3 class="text-lg">{education.title}</h3>
              <p class="text-md">{education.location}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm pb-1">
              {formatDate(education.start_date)} -{" "}
              {formatDate(education.end_date)}
            </p>
            <p class="text-sm">{education.description}</p>
          </CardContent>
        </Card>
      </a>
    </>
  );
};
