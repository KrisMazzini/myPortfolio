import { Container } from './styles'

import { Profile } from '../../components/Profile'
import { Projects } from '../../components/Projects'
import { Posts } from '../../components/Posts'

export function Home() {
    return (
        <Container>
            <Profile />
            <aside id="activity">
                <Projects reposToDisplay={2}/>
                <Posts postsToDisplay={5}/>
            </aside>
        </Container>
    )
}