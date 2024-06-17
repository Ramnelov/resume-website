import { Navigate, Route } from "@solidjs/router";
import { Home } from "~/pages/Home";
import { Education } from "~/pages/Education";
// import { Experiences } from "~/pages/Experences";
// import { Projects } from "~/pages/Projects";
import { UnderConstruction } from "./pages/UnderConstruction";

export const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/education" component={Education} />
      <Route path="/experiences" component={UnderConstruction} />
      <Route path="/projects" component={UnderConstruction} />
      <Route path="/*" component={() => <Navigate href={"/"} />} />;
    </>
  );
};
