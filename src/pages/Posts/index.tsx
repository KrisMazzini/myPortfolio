import { ProfileCard } from "../../components/ProfileCard"
import { Posts } from "../../components/Posts"

import { Links } from '../../components/ActivityHeader'

export function AllPosts() {
    const links:Links[] = [
        {
            path: "/projects",
            text: "Projects"
        }, {
            path: "/",
            text: "Home"
        },
    ]

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
            <ProfileCard />
            <Posts links={links}/>
        </div>
    )
}