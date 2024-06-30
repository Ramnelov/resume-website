import type { ParentComponent } from 'solid-js'

const IconContainer: ParentComponent = ({ children }) => {
  return (
    <div class="m-2 inline-flex text-white transition-colors duration-100 hover:text-gray-400">
      {children}
    </div>
  )
}

export default IconContainer
