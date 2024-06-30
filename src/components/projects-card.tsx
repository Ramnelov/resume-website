import { Component } from 'solid-js'
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
  // CardLocation,
  CardDate,
} from '~/components/ui/card'
import { ProjectsData } from '~/data/data-types'
import { formatDate } from '~/utils/dates'

export const ProjectsCard: Component<ProjectsData> = (projects) => {
  return (
    <>
      <a href={projects.link ?? undefined} target="_blank">
        <Card>
          <CardHeader>
            <CardTitle>{projects.title}</CardTitle>
            {/* <CardDescription>{projects.title}</CardDescription> */}
            {/* <CardLocation>{projects.location}</CardLocation> */}
          </CardHeader>
          <CardDate>
            {formatDate(projects.start_date)} - {formatDate(projects.end_date)}
          </CardDate>
          <CardContent>{projects.description}</CardContent>
        </Card>
      </a>
    </>
  )
}
