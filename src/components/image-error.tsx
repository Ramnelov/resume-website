import { BsExclamationCircleFill } from 'solid-icons/bs'
import { Component } from 'solid-js'

export const ImageError: Component<Error> = (error) => {
  return (
    <>
      <div class="flex h-64 flex-col items-center justify-center">
        <div class="m-2">
          <BsExclamationCircleFill class="size-12" />
        </div>
        <p>{error.message}</p>
      </div>
    </>
  )
}
