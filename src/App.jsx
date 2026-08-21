import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
