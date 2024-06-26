import { ParentComponent, Show, Suspense, createResource } from 'solid-js'
import { Nav } from '~/components/nav'
import { ColorModeProvider, ColorModeScript, createLocalStorageManager } from '@kobalte/core'
import { fetchResumeData } from '~/data/data-fetch'
import { ResumeDataProvider } from '~/data/data-context'
import PageContainer from '~/components/page-container'
import { ErrorPage } from '~/pages/Error'

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
              <PageContainer>
                <ErrorPage {...(resumeData.error as Error)} />
              </PageContainer>
            }
          >
            <ResumeDataProvider value={resumeData}>
              <Nav />
              <PageContainer>
                <Suspense>{props.children}</Suspense>
              </PageContainer>
            </ResumeDataProvider>
          </Show>
        </ColorModeProvider>
      </div>
    </>
  )
}

export default App
