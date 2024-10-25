import { Component, For } from 'solid-js'
import { ExperienceExpandable } from '~/components/experience-expandable'
import { useResumeData } from '~/data/data-context'
import { dateIsInFuture, sortByDate } from '~/utils/dates'
import { Accordion } from '~/components/ui/accordion'
import { ExperienceData } from '~/data/data-types'

function groupByCompany(experiences: ExperienceData[]): Record<string, ExperienceData[]> {
  return experiences.reduce(
    (acc: Record<string, ExperienceData[]>, experience: ExperienceData) => {
      const company = experience.company
      if (!acc[company]) {
        acc[company] = []
      }
      acc[company].push(experience)
      return acc
    },
    {} as Record<string, ExperienceData[]>
  )
}

export const Experience: Component = () => {
  const resumeDataResource = useResumeData()
  const groupedExperiences = groupByCompany(resumeDataResource()?.experience.sort(sortByDate) || [])

  const activeCompanies = Object.entries(groupedExperiences)
    .filter(([, experiences]) =>
      experiences.some((experience) => !experience.end_date || dateIsInFuture(experience.end_date))
    )
    .map(([company]) => company)

  return (
    <>
      <Accordion collapsible defaultValue={activeCompanies}>
        <For each={Object.entries(groupedExperiences)}>
          {([company, experiences]) => (
            <div class="pb-5">
              <ExperienceExpandable company={company} experiences={experiences} />
            </div>
          )}
        </For>
      </Accordion>
    </>
  )
}
