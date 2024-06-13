import { Navigate, Route } from "@solidjs/router";
import { Home } from "~/pages/Home";
import { About } from "~/pages/About";
import { Education } from "~/pages/Education";
import { Experiences } from "~/pages/Experences";
import { Projects } from "~/pages/Projects";

export const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/education" component={Education} />
      <Route path="/experiences" component={Experiences} />
      <Route path="/projects" component={Projects} />
      <Route path="/*" component={() => <Navigate href={"/"} />} />;
    </>
  );
};