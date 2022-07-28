import { Container } from './styles'

import { Profile } from '../../components/Profile'
import { Projects } from '../../components/Projects'
import { Posts } from '../../components/Posts'

export function Home() {
    const projectsLinks = [{
        path: "/projects",
        text: "See all"
    }]

    return (
        <Container>
            <Profile />
            <aside id="activity">
                <Projects reposToDisplay={5} links={projectsLinks}/>
                <Posts postsToDisplay={3}/>
            </aside>
        </Container>
    )
}