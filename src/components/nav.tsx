import { Component, createEffect, createSignal } from 'solid-js'
import { BsList } from 'solid-icons/bs'
import { NavLink } from '~/components/nav-link'
import IconContainer from './icon-container'

export const Nav: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false)
  const [navRef, setNavRef] = createSignal<HTMLDivElement | null>(null)

  /**
   * Handle click outside of the nav to close it
   * @param e
   */
  const handleOutsideClick = (e: MouseEvent) => {
    const ref = navRef()
    if (ref && !ref.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  /**
   * Add or remove event listener for outside click
   */
  createEffect(() => {
    if (isOpen()) {
      document.addEventListener('click', handleOutsideClick)
    } else {
      document.removeEventListener('click', handleOutsideClick)
    }
  })

  return (
    <div class="flex-none">
      <IconContainer>
        <BsList onClick={() => setIsOpen(!isOpen())} class="size-14" />
      </IconContainer>
      <nav
        ref={setNavRef}
        class={`fixed z-50 flex flex-col rounded-r-lg border border-l-0 border-gray-300 border-opacity-20 p-4 text-3xl font-semibold backdrop-blur transition-transform duration-200 ${
          isOpen() ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/education">Education</NavLink>
        <NavLink href="/experience">Experience</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>
    </div>
  )
}
