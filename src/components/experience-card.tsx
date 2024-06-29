import { Component } from 'solid-js'
import {
  Card,
  CardContent,
  CardDate,
  CardDescription,
  CardHeader,
  CardLocation,
  CardTitle,
} from '~/components/ui/card'
import { ExperienceData } from '~/data/data-types'
import { formatDate } from '~/utils/dates'

export const ExperienceCard: Component<ExperienceData> = (experience) => {
  return (
    <>
      <a href={experience.link ?? undefined} target="_blank">
        <Card>
          <CardHeader>
            <CardTitle>{experience.company}</CardTitle>
            <CardDescription>{experience.role}</CardDescription>
            <CardLocation>{experience.location}</CardLocation>
          </CardHeader>
          <CardDate>
            {formatDate(experience.start_date)} - {formatDate(experience.end_date)}
          </CardDate>
          <CardContent>{experience.description}</CardContent>
        </Card>
      </a>
    </>
  )
}
