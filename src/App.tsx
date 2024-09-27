import {
  ParentComponent,
  Show,
  Suspense,
  createResource,
  createSignal,
  onCleanup,
  onMount,
} from 'solid-js'
import { MobileNav } from '~/components/mobile-nav'
import { DesktopNav } from '~/components/desktop-nav'
import { ColorModeProvider, ColorModeScript, createLocalStorageManager } from '@kobalte/core'
import { fetchResumeData } from '~/data/data-fetch'
import { ResumeDataProvider } from '~/data/data-context'
import PageContainer from '~/components/page-container'
import { ErrorPage } from '~/pages/Error'

const App: ParentComponent = (props) => {
  const storageManager = createLocalStorageManager('vite-ui-theme')

  const [resumeData] = createResource(fetchResumeData)

  const [isMobile, setIsMobile] = createSignal(window.matchMedia('(max-width: 768px)').matches)

  const updateMedia = () => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches)
  }

  onMount(() => window.matchMedia('(max-width: 768px)').addEventListener('change', updateMedia))

  onCleanup(() =>
    window.matchMedia('(max-width: 768px)').removeEventListener('change', updateMedia)
  )

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
              {isMobile() ? <MobileNav /> : <DesktopNav />}
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
