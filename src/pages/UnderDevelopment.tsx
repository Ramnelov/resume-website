import { Component } from 'solid-js'
import { BsFileEarmarkCode } from 'solid-icons/bs'

export const UnderDevelopment: Component = () => {
  return (
    <>
      <BsFileEarmarkCode class="blink mx-auto mb-2 size-10" />
      <div>This page is under development.</div>
    </>
  )
}
