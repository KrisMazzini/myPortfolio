import { useState, useEffect, useRef } from "react"
import moment from "moment"

import { Article, Author, Summary, Hashtags } from "./styles"

import { Event } from "../Posts"

type Props = {
    event: Event
}

export function PostCard(props: Props) {

    const capitalizeString = (string:string) => (
        `${string.charAt(0).toUpperCase()}${string.slice(1).toLowerCase()}`
    )

    const getHashtag = (message:string) => {
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
    } = props.event

    const publishingDate = moment(created_at).format('LLL')

    const defaultHashtags:string[] = ["NewEvent"]
    const hashtags = payload?.commits?.map(commit => getHashtag(commit.message))

    const handleResize = () => setPostWidth((ref?.current?.clientWidth || 0))

    const [postWidth, setPostWidth] = useState<number>(0)

    const ref = useRef<HTMLDivElement | null>(null)

    window.addEventListener('resize', handleResize)

    useEffect(() => handleResize(), [])

    return (
        <Article ref={ref}>
            <Author>
                {
                    postWidth > 650 ? (
                        <img src={profilePicture} alt="Profile Picture" />
                    ) : (
                        <p>{user}</p>
                    )
                }
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