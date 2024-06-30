import type { Component, JSXElement } from 'solid-js'

const IconLink: Component<{ href: string | undefined; children: JSXElement }> = (props: {
  href: string | undefined
  children: JSXElement
}) => {
  return (
    <a
      href={props.href}
      target="_blank"
      class="m-2 inline-flex text-white transition-colors duration-100 hover:text-gray-400"
    >
      {props.children}
    </a>
  )
}

export default IconLink
