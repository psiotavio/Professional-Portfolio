import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import AppProjects from '../components/AppProjects'
import Redesigns from '../components/Redesigns'
import GithubProjects from '../components/GithubProjects'
import Skills from '../components/Skills'
import Awards from '../components/Awards'
import Contact from '../components/Contact'

export default function V1() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <AppProjects />
                <Redesigns />
                <GithubProjects />
                <Skills />
                <Awards />
                <Contact />
            </main>
        </>
    )
}
