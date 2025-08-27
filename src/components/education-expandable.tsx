import { Component, For } from 'solid-js'
import { AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
import { EducationData } from '~/data/data-types'
import { formatDate } from '~/utils/dates'
import {
  Card,
  CardContent,
  CardDate,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'

interface EducationExpandableProps {
  location: string
  education: EducationData[]
}

export const EducationExpandable: Component<EducationExpandableProps> = (props) => {
  return (
    <>
      <AccordionItem value={props.location}>
        <AccordionTrigger>
          {props.location}, {formatDate(props.education[props.education.length - 1].start_date)} -{' '}
          {formatDate(props.education[0].end_date)}
        </AccordionTrigger>
        <AccordionContent>
          <For each={props.education}>
            {(education) => (
              <div class="pb-3">
                <a href={education.link ?? undefined} target="blank_">
                  <Card>
                    <CardHeader>
                      <CardTitle>{education.level}</CardTitle>
                      <CardDescription>{education.title}</CardDescription>
                      {/* <CardLocation>{experience.location}</CardLocation> */}
                    </CardHeader>
                    <CardDate>
                      {formatDate(education.start_date)} - {formatDate(education.end_date)}
                    </CardDate>
                    <CardContent>{education.description}</CardContent>
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
