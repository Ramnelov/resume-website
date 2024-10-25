import { Component, For } from 'solid-js'
import { AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
import { ExperienceData } from '~/data/data-types'
import { formatDate } from '~/utils/dates'
import {
  Card,
  CardContent,
  CardDate,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'

interface ExperienceExpandableProps {
  company: string
  experiences: ExperienceData[]
}

export const ExperienceExpandable: Component<ExperienceExpandableProps> = (props) => {
  return (
    <>
      <AccordionItem value={props.company}>
        <AccordionTrigger>{props.company}</AccordionTrigger>
        <AccordionContent>
          <For each={props.experiences}>
            {(experience) => (
              <div class="pb-3">
                <a href={experience.link ?? undefined} target="blank_">
                  <Card>
                    <CardHeader>
                      <CardTitle>{experience.role}</CardTitle>
                      <CardDescription>{experience.location}</CardDescription>
                      {/* <CardLocation>{experience.location}</CardLocation> */}
                    </CardHeader>
                    <CardDate>
                      {formatDate(experience.start_date)} - {formatDate(experience.end_date)}
                    </CardDate>
                    <CardContent>{experience.description}</CardContent>
                  </Card>
                </a>
              </div>
            )}
          </For>
        </AccordionContent>
      </AccordionItem>
    </>
  )
}
