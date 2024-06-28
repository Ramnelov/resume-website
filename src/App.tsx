import { ParentComponent, Show, Suspense, createResource } from 'solid-js'
import { Nav } from '~/components/nav'
import { ColorModeProvider, ColorModeScript, createLocalStorageManager } from '@kobalte/core'
import { fetchResumeData } from '~/data/data-fetch'
import { ResumeDataProvider } from '~/data/data-context'

const App: ParentComponent = (props) => {
  const storageManager = createLocalStorageManager('vite-ui-theme')

  const [resumeData] = createResource(fetchResumeData)

  return (
    <>
      <div class="flex h-dvh flex-col font-titillium">
        <ColorModeScript storageType={storageManager.type} />
        <ColorModeProvider storageManager={storageManager} initialColorMode="dark">
          <Show
            when={!resumeData.error}
            fallback={
              <div class="flex grow flex-col items-center justify-center text-center">
                {(resumeData.error as Error).message}
              </div>
            }
          >
            <ResumeDataProvider value={resumeData}>
              <div class="flex-none">
                <Nav />
              </div>
              <div class="flex grow flex-col items-center justify-center text-center">
                <div class="max-w-xs md:max-w-md lg:max-w-lg">
                  <Suspense>{props.children}</Suspense>
                </div>
              </div>
            </ResumeDataProvider>
          </Show>
        </ColorModeProvider>
      </div>
    </>
  )
}

export default App
