import { Posts } from "../../components/Posts"

export function AllPosts() {
    const links = [{
        path: "/",
        text: "Home"
    }]

    return (
        <Posts links={links}/>
    )
}