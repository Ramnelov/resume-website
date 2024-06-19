import { Navigate, Route } from "@solidjs/router";
import { Home } from "~/pages/Home";
import { Education } from "~/pages/Education";
import { Experience } from "~/pages/Experence";
// import { Projects } from "~/pages/Projects";
import { UnderConstruction } from "./pages/UnderConstruction";

export const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/education" component={Education} />
      <Route path="/experience" component={Experience} />
      <Route path="/projects" component={UnderConstruction} />
      <Route path="/*" component={() => <Navigate href={"/"} />} />;
    </>
  );
};
