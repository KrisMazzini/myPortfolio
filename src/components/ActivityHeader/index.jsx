import { Header } from "./styles.jsx";

export function ActivityHeader({text, pageLinked}) {
    return (
        <Header>
            <h3>{text}</h3>
            <nav>
                <a href={pageLinked}>See all</a>
            </nav>
        </Header>
    )
}