import { Component, createEffect, createSignal } from 'solid-js'
import { BsList } from 'solid-icons/bs'
import { NavLink } from '~/components/nav-link'

export const MobileNav: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false)
  const [navRef, setNavRef] = createSignal<HTMLDivElement | null>(null)

  /**
   * Handle click outside of the nav to close it if not a link
   * @param e
   */
  const handleOutsideClick = (e: MouseEvent) => {
    const ref = navRef()
    const target = e.target as Node

    const isLinkClick = (target: Node): boolean => {
      while (target && target !== document.body) {
        if (target.nodeName.toLowerCase() === 'a') {
          return true
        }
        target = target.parentNode as Node
      }
      return false
    }

    if (!isLinkClick(target) && ref && !ref.contains(target)) {
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
      <BsList
        onClick={() => setIsOpen(!isOpen())}
        class={`fixed left-0 right-0 top-0 z-50 m-2 inline-flex size-14 text-gray-400 transition-colors duration-100 hover:text-white ${isOpen() ? 'text-white' : 'text-gray-400'}`}
      />
      <nav
        ref={setNavRef}
        class={`fixed z-50 mt-20 flex flex-col rounded-r-lg border border-l-0 border-gray-300 border-opacity-20 p-4 text-3xl font-semibold backdrop-blur transition-transform duration-200 ${
          isOpen() ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/experience">Experience</NavLink>
        <NavLink href="/education">Education</NavLink>
        {/* <NavLink href="/projects">Projects</NavLink> */}
        <NavLink href="/contact">Contact</NavLink>
      </nav>
    </div>
  )
}
