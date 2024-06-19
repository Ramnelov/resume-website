import { ParentComponent, Suspense } from "solid-js";
import { Nav } from "~/components/nav";
import {
  ColorModeProvider,
  ColorModeScript,
  createLocalStorageManager,
} from "@kobalte/core";

const App: ParentComponent = (props) => {
  const storageManager = createLocalStorageManager("vite-ui-theme");

  return (
    <>
      <div class="flex flex-col h-dvh">
        <ColorModeScript storageType={storageManager.type} />
        <ColorModeProvider
          storageManager={storageManager}
          initialColorMode="dark"
        >
          <div class="flex-none">
            <Nav />
          </div>
          <div class="grow flex flex-col items-center justify-center text-center font-titillium">
            <div class="max-w-xs md:max-w-md lg:max-w-lg">
              <Suspense>{props.children}</Suspense>
            </div>
          </div>
        </ColorModeProvider>
      </div>
    </>
  );
};

export default App;
