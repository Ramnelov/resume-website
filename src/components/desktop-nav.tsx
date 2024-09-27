import { Component } from 'solid-js'
import { NavLink } from '~/components/nav-link'

export const DesktopNav: Component = () => {
  return (
    <nav class="fixed left-0 right-0 top-0 z-50 mb-5 flex items-center justify-center gap-3 border-b-1 border-gray-300 border-opacity-20 text-3xl font-semibold backdrop-blur">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/education">Education</NavLink>
      <NavLink href="/experience">Experience</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </nav>
  )
}
