import { Component, createEffect, createSignal } from 'solid-js'
import { A, useLocation } from '@solidjs/router'
import { FiMenu } from 'solid-icons/fi'

export const Nav: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false)
  const location = useLocation()
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
    <div>
      <div class="flex justify-between p-2">
        <FiMenu
          onClick={() => setIsOpen(!isOpen())}
          class="size-14 text-gray-400 transition-colors duration-100 hover:text-white"
        />
      </div>
      <nav
        ref={setNavRef}
        class={`fixed z-50 flex flex-col items-start rounded-r-lg border border-l-0 border-gray-300 border-opacity-20 p-4 font-titillium text-3xl backdrop-blur transition-transform duration-200 ${
          isOpen() ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transform: `translateX(${isOpen() ? '0%' : '-100%'})` }}
      >
        <A
          href="/"
          class={`my-2 font-semibold transition-colors duration-100 ${
            location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Home
        </A>
        <A
          href="/education"
          class={`my-2 font-semibold transition-colors duration-100 ${
            location.pathname === '/education' ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Education
        </A>
        <A
          href="/experience"
          class={`my-2 font-semibold transition-colors duration-100 ${
            location.pathname === '/experience' ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Experiences
        </A>
        <A
          href="/projects"
          class={`my-2 font-semibold transition-colors duration-100 ${
            location.pathname === '/projects' ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Projects
        </A>
      </nav>
    </div>
  )
}
