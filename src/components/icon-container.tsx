import type { ParentComponent } from 'solid-js'

const IconContainer: ParentComponent = ({ children }) => {
  return (
    <div class="m-2 text-gray-400 transition-colors duration-100 hover:text-white">{children}</div>
  )
}

export default IconContainer
