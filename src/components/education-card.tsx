import { Component } from 'solid-js'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardLocation,
  CardDate,
} from '~/components/ui/card'
import { EducationData } from '~/data/data-types'
import { formatDate } from '~/utils/dates'

export const EducationCard: Component<EducationData> = (education) => {
  return (
    <>
      <a href={education.link ?? undefined} target="_blank">
        <Card>
          <CardHeader>
            <CardTitle>{education.level}</CardTitle>
            <CardDescription>{education.title}</CardDescription>
            <CardLocation>{education.location}</CardLocation>
          </CardHeader>
          <CardDate>
            {formatDate(education.start_date)} - {formatDate(education.end_date)}
          </CardDate>
          <CardContent>{education.description}</CardContent>
        </Card>
      </a>
    </>
  )
}
