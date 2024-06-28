import { Component, For } from 'solid-js'
import { ExperienceCard } from '~/components/experience-card'
import { useResumeData } from '~/data/data-context'
import { sortByDate } from '~/utils/dates'

export const Experience: Component = () => {
  const resumeDataResource = useResumeData()

  return (
    <>
      <For each={resumeDataResource()?.experience.sort(sortByDate)}>
        {(experience) => (
          <div class="pb-5">
            <ExperienceCard {...experience} />
          </div>
        )}
      </For>
    </>
  )
}
