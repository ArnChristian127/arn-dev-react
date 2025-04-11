import './App.css'
import Navbar from './components/comp-navbar/Navbar'
import About from './components/comp-about/About'
import Skills from './components/comp-skills/Skills'
import Projects from './components/comp-projects/Projects'
function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  )
}

export default App