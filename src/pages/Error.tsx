import { BsExclamationCircleFill } from 'solid-icons/bs'
import { Component } from 'solid-js'

export const ErrorPage: Component<Error> = (error) => {
  return (
    <>
      <div class="m-2 flex justify-center">
        <BsExclamationCircleFill class="size-12" />
      </div>
      {error.message}
    </>
  )
}
