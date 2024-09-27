import type { ParentComponent } from 'solid-js'

const PageContainer: ParentComponent = ({ children }) => {
  return (
    <div class="mt-16 flex grow flex-col items-center justify-center text-center">
      <div class="max-w-xs md:max-w-md lg:max-w-lg">{children}</div>
    </div>
  )
}

export default PageContainer
