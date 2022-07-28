import { Projects } from "../../components/Projects";

export function AllProjects() {
    const links = [{
        path: "/",
        text: "Home"
    }]

    return (
        <Projects links={links}/>
    )
}