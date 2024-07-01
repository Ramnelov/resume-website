import { Component, Show, createResource } from 'solid-js'
import { useResumeData } from '~/data/data-context'
import { ImageComponent } from '~/components/image-component'
import { fetchImageUrl } from '~/data/data-fetch'
import { ImageError } from '~/components/image-error'

const [profilePictureUrl] = createResource(() => fetchImageUrl('profile-picture.jpg'))

export const Home: Component = () => {
  const resumeDataResource = useResumeData()

  return (
    <>
      <Show when={!profilePictureUrl.error} fallback={<ImageError {...profilePictureUrl.error} />}>
        <ImageComponent src={profilePictureUrl()} />
      </Show>
      <p class="pt-4">{resumeDataResource()?.texts['summary']}</p>
    </>
  )
}
