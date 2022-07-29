import { Link } from "react-router-dom";
import { Header } from "./styles.jsx";

export function ActivityHeader({text, links}) {
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