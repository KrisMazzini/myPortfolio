import { Article, Header, Links, Footer, Insights, Insight, Language } from './styles.jsx'

import star from '/star.svg'
import branches from '/git-branch.svg'
import folder from '/folder.svg'
import github from '/github.svg'
import globe from '/globe.svg'
import githubColors from '../../utils/githubColors.json'

export function ProjectCard({githubRepo}) {

    const {
        name,
        description,
        language,
        html_url,
        homepage,
        stargazers_count,
        forks_count,
    } = githubRepo

    const languageColor = githubColors[language] || "#FFFFFF";

    const stars = {
        icon: star,
        name: "stars",
        value: stargazers_count || 0,
    }

    const forks = {
        icon: branches,
        name: "forks",
        value: forks_count || 0,
    }

    const insights = [stars, forks]

    return (
        <Article>
            <Header>
                <img src={folder} alt="folder" />
                <h4>{name}</h4>
                <Links>
                    {
                        homepage ?
                        <a href={homepage} target="_blank"><img src={globe} alt="Homepage" /></a> :
                        ""
                    }
                    <a href={html_url} target="_blank"><img src={github} alt="GitHub" /></a>
                </Links>
            </Header>

            <p>{description}</p>

            <Footer>
                <Insights>
                    {
                        insights.map(insight => (
                            <Insight key={insight.name}>
                                <img src={insight.icon} alt={insight.name}></img>
                                <p>{insight.value}</p>
                            </Insight>
                        ))
                    }
                </Insights>
                <Language color={languageColor}>{language}</Language>
            </Footer>
        </Article>
    )
}