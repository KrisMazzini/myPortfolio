import './styles.css'

import { Projects } from '../../components/Projects'
import { Posts } from '../../components/Posts'

export function Home() {
    return (
        <aside id="activity">
            <Projects />
            <Posts />
        </aside>
    )
}