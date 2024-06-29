import { Component } from 'solid-js'
import { Image } from '@kobalte/core'
import { ImSpinner8 } from 'solid-icons/im'

export const ImageComponent: Component<{ src: string | undefined }> = (props) => {
  return (
    <Image.Root>
      <Image.Img src={props.src} class="mx-auto h-64 w-64 rounded-lg object-cover" />
      <Image.Fallback class="flex h-64 items-center justify-center">
        <ImSpinner8 class="mx-auto size-10 animate-spin" />
      </Image.Fallback>
    </Image.Root>
  )
}
