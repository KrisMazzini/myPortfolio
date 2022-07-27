import { Main, SocialMedias, Skills } from "./styles"
import { ProfileCard } from "../ProfileCard"

import { socialMedias, skills } from "../../constants/profile"

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
                        skills.map(skill => <li>{skill}</li>)
                    }
                </Skills>
            </section>
        </Main>
    )
}