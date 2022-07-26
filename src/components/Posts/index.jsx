import { useState, useEffect } from "react";
import axios from "axios";

import { PostsContainer } from "./styles.jsx";
import { ActivityHeader } from "../ActivityHeader";
import { PostCard } from "../PostCard";

export function Posts({postsToDisplay}) {

    const [events, setEvents] = useState([])

    useEffect(() => {
        async function fetchRepos() {
            const eventsURL = "https://api.github.com/users/KrisMazzini/events"
            const response = await axios.get(eventsURL)
            const eventsData = response.data

            eventsData.sort((event1, event2) => {
                const event1CreationData = new Date(event1.created_at)
                const event2CreationData = new Date(event2.created_at)

                return event2CreationData.getTime() - event1CreationData.getTime()
            })

            setEvents(eventsData.slice(0, postsToDisplay))
        }

        fetchRepos().catch(err => console.error(err))
    }, [])

    return (
        <section id="recent-posts">
            <ActivityHeader text="Recent Events" />
            <PostsContainer>
                {
                    events.map(event => (
                        <PostCard key={event.id} event={event} />
                    ))
                }
            </PostsContainer>
        </section>
    )
}