import { Container } from './styles'

import { Profile } from '../../components/Profile'
import { Projects } from '../../components/Projects'
import { Posts } from '../../components/Posts'

import { Links } from '../../components/ActivityHeader'

export function Home() {
    const projectsLinks:Links[] = [{
        path: "/projects",
        text: "See all"
    }]

    const postsLinks:Links[] = [{
        path: "/posts",
        text: "See all"
    }]

    return (
        <Container>
            <Profile />
            <aside id="activity">
                <Projects reposToDisplay={5} links={projectsLinks}/>
                <Posts postsToDisplay={3} links={postsLinks}/>
            </aside>
        </Container>
    )
}