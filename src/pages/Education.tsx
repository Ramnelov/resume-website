import { Component, For } from 'solid-js'
import { EducationCard } from '~/components/education-card'
import { useResumeData } from '~/data/data-context'
import { sortByDate } from '~/utils/dates'

export const Education: Component = () => {
  const resumeDataResource = useResumeData()

  return (
    <>
      <For each={resumeDataResource()?.education.sort(sortByDate)}>
        {(education) => (
          <div class="pb-5">
            <EducationCard {...education} />
          </div>
        )}
      </For>
    </>
  )
}
