import { Main, SocialMedias } from "./styles"
import { ProfileCard } from "../ProfileCard"

import { socialMedias } from "../../constants/profile"

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
        </Main>
    )
}