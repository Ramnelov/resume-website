import { Component } from 'solid-js'
import { useResumeData } from '~/data/data-context'
import { BsEnvelopeFill, BsGithub, BsLinkedin } from 'solid-icons/bs'
import IconLink from '~/components/icon-link'

export const Contact: Component = () => {
  const resumeDataResource = useResumeData()

  return (
    <>
      <p>{resumeDataResource()?.texts['contact']}</p>
      <div class="flex justify-center pt-2">
        <IconLink href={resumeDataResource()?.links['e-mail']}>
          <BsEnvelopeFill class="size-12" />
        </IconLink>
        <IconLink href={resumeDataResource()?.links['github']}>
          <BsGithub class="size-12" />
        </IconLink>
        <IconLink href={resumeDataResource()?.links['linkedin']}>
          <BsLinkedin class="size-12" />
        </IconLink>
      </div>
    </>
  )
}
