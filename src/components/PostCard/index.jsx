import { Article, Author, Summary, Hashtags } from "./styles"

import profilePicture from "/kristopher.jpg"

export function PostCard() {
    return (
        <Article>
            <Author>
                <img src={profilePicture} alt="Profile Picture" />
                <p>Kristopher Mazzini</p>
            </Author>
            <Summary>
                <header>
                    <h4>Title</h4>
                    <p>Publishing date</p>
                </header>
                <p>Headline</p>
                <footer>
                    <Hashtags>
                        {["hello", "world"].map(hashtag => <li>{hashtag}</li>)}
                    </Hashtags>
                </footer>
            </Summary>
        </Article>
    )
}