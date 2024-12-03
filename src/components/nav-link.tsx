import { useLocation } from '@solidjs/router'
import { Component, JSX } from 'solid-js'

export const NavLink: Component<{ href: string; children: JSX.Element; onClick?: () => void }> = ({
  href,
  children,
  onClick,
}) => {
  // Example return statement - adjust according to your needs

  const location = useLocation()

  return (
    <a
      href={href}
      class={`my-2 transition-colors duration-100 ${location.pathname === href ? 'text-white' : 'text-gray-400 hover:text-white'}`}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
