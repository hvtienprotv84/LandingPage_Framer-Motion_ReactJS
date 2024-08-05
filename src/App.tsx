import { lazy } from 'react'

const Welcome = lazy(() => import('./components/sections/Front'))
const About = lazy(() => import('./components/sections/About'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Socials = lazy(() => import('./components/sections/Socials'))

import './constants/styles/Styles.css'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

function App() {
  return (
    <main className="scroll-smooth overflow-y-scroll h-screen flex-grow z-0">
      <LazyLoadComponent>
        <Welcome />
        <About />
        <Projects />
        <Socials />
      </LazyLoadComponent>
    </main>
  )
}

export default App
