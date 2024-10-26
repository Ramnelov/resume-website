import { Navigate, Route } from '@solidjs/router'
import { Home } from '~/pages/Home'
import { Education } from '~/pages/Education'
import { Experience } from '~/pages/Experence'
// import { Projects } from '~/pages/Projects'
import { Contact } from '~/pages/Contact'

export const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/experience" component={Experience} />
      <Route path="/education" component={Education} />
      {/* <Route path="/projects" component={Projects} /> */}
      <Route path="/contact" component={Contact} />
      <Route path="/*" component={() => <Navigate href={'/'} />} />;
    </>
  )
}
