import V2Hero from '../components/v2/V2Hero'
import V2About from '../components/v2/V2About'
import V2Projects from '../components/v2/V2Projects'
import V2Redesigns from '../components/v2/V2Redesigns'
import V2WebProjects from '../components/v2/V2WebProjects'
import V2GithubProjects from '../components/v2/V2GithubProjects'
import V2Skills from '../components/v2/V2Skills'
import V2Awards from '../components/v2/V2Awards'
import V2Contact from '../components/v2/V2Contact'
import '../styles/v2.css'

export default function V2() {
    return (
        <div className="v2-container">
            <V2Hero />
            <V2About />
            <V2Projects />
            <V2WebProjects />
            <V2Redesigns />
            <V2GithubProjects />
            <V2Skills />
            <V2Awards />
            <V2Contact />
        </div>
    )
}
