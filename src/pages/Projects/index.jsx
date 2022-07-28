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
        <Projects links={links}/>
    )
}