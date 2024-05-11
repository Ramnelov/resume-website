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
      <div class="flex flex-col h-screen">
        <ColorModeScript storageType={storageManager.type} />
        <ColorModeProvider
          storageManager={storageManager}
          initialColorMode="dark"
        >
          <Nav />
          <div class="flex-grow flex items-center justify-center">
            <Suspense>{props.children}</Suspense>
          </div>
        </ColorModeProvider>
      </div>
    </>
  );
};

export default App;
