import Places from "./Places.jsx";
import "./Card.css";
import { useState } from "react";

function Card({

    src,
    answer,
    options,
    fact,
    alt,
    onClick,
    setTotalScore,
    countDown,
    showFact,
    darkTheme


}) {

    const [isCorrect, setIsCorrect] = useState(0);
    const [optionSelected, setOptionSelected] = useState("");
    const [canSelectOption, setCanSelectOption] = useState(true);

    const allOptions =
        options.map((option) => {
            return (
                <button key={option} aria-label={`button to select ${option} as answer`} className={`independent-option ${(option === answer && optionSelected === answer) ? "correct-answer" : ""}  ${(option != answer && optionSelected === option) ? "wrong-answer" : ""}`}
                    onClick={() => {
                        if (canSelectOption === true) {
                            setOptionSelected(option);
                            if (option === answer && countDown > 0) {
                                setTotalScore(curr => curr + 50);
                                setIsCorrect(1);
                            }
                            else {
                                setIsCorrect(-1);
                            }
                            setCanSelectOption(false);
                        }

                    }}

                > {option}</button >

            )
        })

    return (
        <div className={`independent-card-container ${(canSelectOption === false || showFact) ? "card-expanded" : ""}  ${darkTheme ? "dark-background-card" : ""}`} >

            <img src={src} alt={alt} className="card-image" />
            <div className="card-options">{allOptions}</div>
            {(canSelectOption === false || showFact) &&
                <div className={`detailed-answer ${darkTheme ? "dark-background-card" : ""}`} >
                    <div className="answer">{answer} </div>
                    <div className="card-fact">{fact}</div>
                </div>
            }



        </div>
    );
}
export default Card;