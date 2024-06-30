import { Component } from 'solid-js'
import { useResumeData } from '~/data/data-context'
import { ImageComponent } from '~/components/image-component'

export const Home: Component = () => {
  const resumeDataResource = useResumeData()

  return (
    <>
      <ImageComponent src={resumeDataResource()?.links['profile-picture']} />

      <p class="pt-4">{resumeDataResource()?.texts['summary']}</p>
    </>
  )
}
