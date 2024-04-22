import { ParentComponent } from "solid-js";
import { Navbar } from "~/components/navbar";

const App: ParentComponent = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default App;
