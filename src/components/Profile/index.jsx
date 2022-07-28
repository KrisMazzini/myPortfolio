import { Main, SocialMedias, Skills, Background } from "./styles"
import { ProfileCard } from "../ProfileCard"

import { socialMedias, skills, professionalBackground, education } from "../../constants/profile"

export function Profile() {    
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
                            <li>{skill.name}</li>
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