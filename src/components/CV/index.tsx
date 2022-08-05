import { Button } from "./styles";

import cvURL from "/KristopherMazzini.pdf"

export function CV() {
    return (
        <a href={cvURL} target="_blank">
            <Button>
                Download CV
            </Button>
        </a>
    )
}