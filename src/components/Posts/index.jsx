import { PostsContainer } from "./styles.jsx";

import { ActivityHeader } from "../ActivityHeader";
import { PostCard } from "../PostCard";

export function Posts() {
    return (
        <section id="recent-posts">
            <ActivityHeader text="Recent Posts" />
            <PostsContainer>
                <PostCard></PostCard>
            </PostsContainer>
        </section>
    )
}