import Title from "./Title"
import Game from "./Game"

export default function App(props) {

    return (
        <div id="main" className="flex flex-col items-center">
            <Title></Title>
            <Game></Game>
        </div>
    )
}