import { Route } from "@solidjs/router";
import { Test } from "~/pages/Test";

export const Routes = () => {
  return (
    <>
      <Route path="/test" component={Test} />
    </>
  );
};
