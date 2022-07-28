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
        <Posts links={links}/>
    )
}