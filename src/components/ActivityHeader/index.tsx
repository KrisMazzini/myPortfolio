import { Link } from "react-router-dom";
import { Header } from "./styles.jsx";

type Links = {
    path: string;
    text: string;
}

type Props = {
    text: string;
    links: Links[];
}

export function ActivityHeader(props: Props) {
    
    const { text, links } = props

    return (
        <Header>
            <h3>{text}</h3>
            {
                links?.length ? (
                    <nav>
                        <ul>
                            {
                                links.map(link => <li><Link to={link.path}>{link.text}</Link></li>)
                            }
                        </ul>
                    </nav>
                ) : <></>
            }
        </Header>
    )
}