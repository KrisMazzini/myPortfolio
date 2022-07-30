import moment from "moment"

import { Main, SocialMedias, Skills, Skill, Background } from "./styles"
import { ProfileCard } from "../ProfileCard"

import { socialMedias, skills, professionalBackground, education } from "../../constants/profile"

export function Profile() {
    function getExperienceTime(since:string):string {
        const startDate = moment(since, "YYYY-MM-DD")
        const now = moment()

        const timeDiffInYears = Math.abs(startDate.diff(now, 'years'))
        const timeDiffInMonths = Math.abs(startDate.diff(now, 'months'))

        if (timeDiffInYears) return `${timeDiffInYears} years`
        if (timeDiffInMonths) return `${timeDiffInMonths} months`

        return "No xp."
    }

    return (
        <Main>
            <ProfileCard />
            <section>
                <SocialMedias>
                    {
                        socialMedias.map(social => (
                            <li>
                                <a href={social.link} target="_blank">
                                    <img src={social.imgSrc} alt={social.imgAlt}/>
                                    {social.name}
                                </a>
                            </li>
                        ))
                    }
                </SocialMedias>
            </section>
            <section>
                <h3>Skills</h3>
                <Skills>
                    {
                        skills.map(skill => (
                            <Skill experienceTime={getExperienceTime(skill.since)}>{skill.name}</Skill>
                        ))
                    }
                </Skills>
            </section>
            <section>
                <h3>Professional Background</h3>
                <Background>
                    {
                        professionalBackground.map(background => (
                            <li>
                                <h4>{background.role}</h4>
                                <p>{background.period}</p>
                                <p>{background.company}</p>
                            </li>
                        ))
                    }
                </Background>
            </section>
            <section>
                <h3>Education</h3>
                <Background>
                    {
                        education.map(edu => (
                            <li>
                                <h4>{edu.description}</h4>
                                <p>{edu.period}</p>
                                <p>{edu.institution}</p>
                            </li>
                        ))
                    }
                </Background>
            </section>
        </Main>
    )
}