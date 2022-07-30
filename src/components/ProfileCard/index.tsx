import { Header } from "./styles";
import profilePicture from "/kristopher.jpg"
import blackLogo from "/black-logo.png"

export function ProfileCard() {
    return (
        <Header>
            <div>
                <div></div>
                <img src={profilePicture} alt="Profile Picture" />
            </div>
            <img src={blackLogo} alt="Black Logo" />
        </Header>
    )
}