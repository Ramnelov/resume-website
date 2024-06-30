import { Component } from 'solid-js'
import { useResumeData } from '~/data/data-context'
import { BsEnvelopeFill, BsGithub, BsLinkedin } from 'solid-icons/bs'
import IconContainer from '~/components/icon-container'

export const Contact: Component = () => {
  const resumeDataResource = useResumeData()

  return (
    <>
      <p>{resumeDataResource()?.texts['contact']}</p>
      <div class="flex justify-center pt-2">
        <IconContainer>
          <a href={resumeDataResource()?.links['e-mail']} target="_blank">
            <BsEnvelopeFill class="size-12" />
          </a>
        </IconContainer>
        <IconContainer>
          <a href={resumeDataResource()?.links['github']} target="_blank">
            <BsGithub class="size-12" />
          </a>
        </IconContainer>
        <IconContainer>
          <a href={resumeDataResource()?.links['linkedin']} target="_blank">
            <BsLinkedin class="size-12" />
          </a>
        </IconContainer>
      </div>
    </>
  )
}
