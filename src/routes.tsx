import { Navigate, Route } from '@solidjs/router'
import { Home } from '~/pages/Home'
import { Education } from '~/pages/Education'
import { Experience } from '~/pages/Experence'
// import { Projects } from "~/pages/Projects";
import { UnderDevelopment } from '~/pages/UnderDevelopment'

export const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/education" component={Education} />
      <Route path="/experience" component={Experience} />
      <Route path="/projects" component={UnderDevelopment} />
      <Route path="/*" component={() => <Navigate href={'/'} />} />;
    </>
  )
}
