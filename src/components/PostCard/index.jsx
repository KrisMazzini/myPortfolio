import moment from "moment"

import { Article, Author, Summary, Hashtags } from "./styles"

export function PostCard({event}) {

    const capitalizeString = string => (
        `${string.charAt(0).toUpperCase()}${string.slice(1).toLowerCase()}`
    )

    const getHashtag = message => {
        const trimmedMessage = message.replace(/\s+/g,' ').trim();
        const messageKeys = trimmedMessage.split(' ')
        const hashtag = messageKeys.map(capitalizeString).join('')

        return hashtag
    }

    const {
        type,
        created_at,
        actor: { login: user, avatar_url: profilePicture },
        repo: { name: repoName },
        payload,
    } = event

    const publishingDate = moment(created_at).format('LLL')

    const defaultHashtags = ["NewEvent"]
    const hashtags = payload?.commits?.map(commit => getHashtag(commit.message))

    return (
        <Article>
            <Author>
                <img src={profilePicture} alt="Profile Picture" />
            </Author>
            <Summary>
                <header>
                    <h4>{type}</h4>
                    <p>{publishingDate}</p>
                </header>
                <p>{repoName}</p>
                <footer>
                    <Hashtags>
                        {
                            (hashtags || defaultHashtags).map(hashtag => <li>{hashtag}</li>)
                        }
                    </Hashtags>
                </footer>
            </Summary>
        </Article>
    )
}