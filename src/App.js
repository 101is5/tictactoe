import Title from "./Title"
import Game from "./Game"
import { useEffect } from "react"

export default function App(props) {

    return (
        <div id="main" className="flex flex-col items-center">
            <Title></Title>
            <Game></Game>
        </div>
    )
}