import { useState } from "react"

export default function Game(props) {

    const [mark1, setMark1] = useState("blank.png")
    const [mark2, setMark2] = useState("blank.png")
    const [mark3, setMark3] = useState("blank.png")
    const [mark4, setMark4] = useState("blank.png")
    const [mark5, setMark5] = useState("blank.png")
    const [mark6, setMark6] = useState("blank.png")
    const [mark7, setMark7] = useState("blank.png")
    const [mark8, setMark8] = useState("blank.png")
    const [mark9, setMark9] = useState("blank.png")
    const [next, setNext] = useState("x.png")
    const [prev, setPrev] = useState("o.png")


    const play = (e) => {

        let div = document.getElementById(e.target.id);

        if (div.src === "http://localhost:3000/blank.png") {
            switch (div.id) {
                case "sqr1":
                    setMark1(next);
                    break;
                case "sqr2":
                    setMark2(next);
                    break;
                case "sqr3":
                    setMark3(next);
                    break;
                case "sqr4":
                    setMark4(next);
                    break;
                case "sqr5":
                    setMark5(next);
                    break;
                case "sqr6":
                    setMark6(next);
                    break;
                case "sqr7":
                    setMark7(next);
                    break;
                case "sqr8":
                    setMark8(next);
                    break;
                case "sqr9":
                    setMark9(next);
                    break;
            }
        }

        if (next === "x.png") {
            setNext("o.png")
            setPrev(next)
        } else {
            setNext("x.png")
            setPrev(next)
        }
    }

    let game = play;
    let done = false;

    if (
        (mark1 !== "blank.png" && mark1 === mark2 && mark1 === mark3) ||
        (mark4 !== "blank.png" && mark4 === mark5 && mark4 === mark6) ||
        (mark7 !== "blank.png" && mark7 === mark8 && mark7 === mark9) ||
        (mark1 !== "blank.png" && mark1 === mark4 && mark1 === mark7) ||
        (mark2 !== "blank.png" && mark2 === mark5 && mark2 === mark8) ||
        (mark3 !== "blank.png" && mark3 === mark6 && mark3 === mark9) ||
        (mark1 !== "blank.png" && mark1 === mark5 && mark1 === mark9) ||
        (mark3 !== "blank.png" && mark3 === mark5 && mark3 === mark7)
    ) {
        game = () => { };
        done = true;
    }

    return (
        <div id="game" className="flex-1 flex items-center justify-center inset-80">
            <div id="grid" className="relative flex flex-col">

                {
                    done ?
                        <div className="flex items-center justify-center inset-40 rounded-xl text-5xl absolute bg-opacity-50 bg-blue-500">
                            <div className="flex justify-center bg-blue-400 bg-opacity-50 w-72 rounded-lg italic font-extrabold text-yellow-400">
                                {`"${prev[0].toUpperCase()}" venceu!`}
                            </div>
                            <button className="flex items-center justify-center inset-x-0 bottom-0 left-32 right-32 rounded-lg text-3xl absolute bg-opacity-50 bg-yellow-400 font-extrabold text-blue-900" onClick={() => window.location.reload()}>
                                Nova partida
                            </button>
                        </div> :
                        null
                }

                <div id="line1" className="flex">
                    <div className="border-b-8 border-r-8 border-r-cyan-800 border-b-cyan-800">
                        <img id="sqr1" alt="" src={mark1} onClick={game} />
                    </div>
                    <div className="border-b-8 border-r-8 border-l-8 border-r-cyan-800 border-b-cyan-800 border-l-cyan-800">
                        <img id="sqr2" alt="" src={mark2} onClick={game} />
                    </div>
                    <div className="border-b-8 border-l-8 border-l-cyan-800 border-b-cyan-800">
                        <img id="sqr3" alt="" src={mark3} onClick={game} />
                    </div>
                </div>

                <div id="line2" className="flex">
                    <div className="border-t-8 border-b-8 border-r-8 border-t-cyan-800 border-b-cyan-800 border-r-cyan-800">
                        <img id="sqr4" alt="" src={mark4} onClick={game} />
                    </div>
                    <div className="border-8 border-cyan-800">
                        <img id="sqr5" alt="" src={mark5} onClick={game} />
                    </div>
                    <div className="border-t-8 border-b-8 border-l-8 border-t-cyan-800 border-l-cyan-800 border-b-cyan-800">
                        <img id="sqr6" alt="" src={mark6} onClick={game} />
                    </div>
                </div>

                <div id="line3" className="flex">
                    <div className="border-t-8 border-r-8 border-t-cyan-800 border-r-cyan-800">
                        <img id="sqr7" alt="" src={mark7} onClick={game} />
                    </div>
                    <div className="border-t-8 border-l-8 border-r-8 border-t-cyan-800 border-l-cyan-800 border-r-cyan-800">
                        <img id="sqr8" alt="" src={mark8} onClick={game} />
                    </div>
                    <div className="border-t-8 border-l-8 border-t-cyan-800 border-l-cyan-800">
                        <img id="sqr9" alt="" src={mark9} onClick={game} />
                    </div>
                </div>
            </div>
        </div>

    )
}