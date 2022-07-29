import { ProfileCard } from "../../components/ProfileCard"
import { Posts } from "../../components/Posts"

export function AllPosts() {
    const links = [
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