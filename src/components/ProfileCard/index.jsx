import { Header } from "./styles";
import profilePicture from "/kristopher.jpg"
import blackLogo from "/black-logo.png"

export function ProfileCard() {
    return (
        <Header>
            <img src={profilePicture} alt="Profile Picture" />
            <img src={blackLogo} alt="Black Logo" />
        </Header>
    )
}