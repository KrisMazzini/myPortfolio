import { ProfileCard } from "../../components/ProfileCard";
import { Projects } from "../../components/Projects";

export function AllProjects() {
    const links = [
        {
            path: "/posts",
            text: "Posts"
        }, {
            path: "/",
            text: "Home"
        },
    ]

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
            <ProfileCard />
            <Projects links={links}/>
        </div>
    )
}