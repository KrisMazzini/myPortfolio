import { Header } from "./styles";
import profilePicture from "/kristopher.jpg"

export function ProfileCard() {
    return (
        <Header>
            <img src={profilePicture} alt="Profile Picture" />
            <h1>Kristopher Mazzini</h1>
            <h2>Front-End Developer</h2>
        </Header>
    )
}