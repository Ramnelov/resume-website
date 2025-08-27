import { Component, createEffect, createSignal, For, Show } from 'solid-js'
import { EducationExpandable } from '~/components/education-expandable'
import { useResumeData } from '~/data/data-context'
import { dateIsInFuture, sortByDate } from '~/utils/dates'
import { Accordion } from '~/components/ui/accordion'
import { EducationData } from '~/data/data-types'

function groupByLocation(education: EducationData[]): Record<string, EducationData[]> {
  return education.reduce(
    (acc: Record<string, EducationData[]>, education: EducationData) => {
      const location = education.location
      if (!acc[location]) {
        acc[location] = []
      }
      acc[location].push(education)
      return acc
    },
    {} as Record<string, EducationData[]>
  )
}

export const Education: Component = () => {
  const resumeDataResource = useResumeData()

  const [groupedEducations, setGroupedEducations] = createSignal<Record<string, EducationData[]>>(
    {}
  )
  const [activeCompanies, setActiveCompanies] = createSignal<string[]>([])

  createEffect(() => {
    const data = resumeDataResource()

    if (!data) {
      return
    }

    const education = data?.education.sort(sortByDate) || []
    const grouped = groupByLocation(education)
    setGroupedEducations(grouped)

    const active = Object.entries(grouped)
      .filter(([, education]) =>
        education.some((education) => !education.end_date || dateIsInFuture(education.end_date))
      )
      .map(([company]) => company)

    setActiveCompanies(active)
  })

  return (
    <>
      <Accordion collapsible defaultValue={activeCompanies()}>
        <For each={Object.entries(groupedEducations())}>
          {([location, education]) => (
            <div class="pb-5">
              <EducationExpandable location={location} education={education} />
            </div>
          )}
        </For>
      </Accordion>
    </>
  )
}
