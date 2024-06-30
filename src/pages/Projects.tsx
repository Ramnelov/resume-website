import { Component, For } from 'solid-js'
import { ProjectsCard } from '~/components/projects-card'
import { useResumeData } from '~/data/data-context'
import { sortByDate } from '~/utils/dates'

export const Projects: Component = () => {
  const resumeDataResource = useResumeData()

  return (
    <>
      <For each={resumeDataResource()?.projects.sort(sortByDate)}>
        {(project) => (
          <div class="pb-5">
            <ProjectsCard {...project} />
          </div>
        )}
      </For>
    </>
  )
}
