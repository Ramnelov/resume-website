import { Component, createResource } from 'solid-js'
import { useResumeData } from '~/data/data-context'
import { ImageComponent } from '~/components/image-component'
import { fetchImageUrl } from '~/data/data-fetch'

const [profilePictureUrl] = createResource(() => fetchImageUrl('profile-picture.jpg'))

export const Home: Component = () => {
  const resumeDataResource = useResumeData()

  return (
    <>
      <ImageComponent src={profilePictureUrl()} />

      <p class="pt-4">{resumeDataResource()?.texts['summary']}</p>
    </>
  )
}
