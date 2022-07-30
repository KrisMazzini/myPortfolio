import { useState, useEffect } from "react";
import axios from "axios";

import { Repos } from "./styles"
import { ActivityHeader, Links } from "../ActivityHeader";
import { ProjectCard, GithubRepo } from "../ProjectCard";

type Props = {
    reposToDisplay: number;
    links: Links[];
}

export function Projects(props: Props) {

    const { reposToDisplay, links } = props

    const [repos, setRepos] = useState<GithubRepo[]>([])

    useEffect(() => {
        async function fetchRepos() {
            const reposURL = "https://api.github.com/users/KrisMazzini/repos"
            const response = await axios.get(reposURL)
            const reposData = response.data as GithubRepo[]

            reposData.sort((repo1, repo2) => {
                const repo1CreationData = new Date(repo1.created_at)
                const repo2CreationData = new Date(repo2.created_at)

                return repo2CreationData.getTime() - repo1CreationData.getTime()
            })

            setRepos(reposData.slice(0, reposToDisplay))
        }

        fetchRepos().catch(err => console.error(err))
    }, [])

    return (
        <section id="projects">
            <ActivityHeader text="My Projects" links={links}/>
            <Repos>
                {
                    repos.map(repo => <ProjectCard key={repo.name} githubRepo={repo} />)
                }
            </Repos>
        </section>
    )
}