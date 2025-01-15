import { useEffect, useState } from 'react';
import "./Accordion.css";
function Accordion({ className, title, answer, options, setCount, darkTheme }) {
    const [showOptions, setshowOptions] = useState(false);
    const [correctSelected, setcorrectSelected] = useState(false);
    const [toBeHighlighted, settoBeHighlighted] = useState("");
    const [showCorrectAnswerToUser, setshowCorrectAnswerToUser] = useState(false);

    const listOfOptions = options.map(item => {
        return (
            <button key={item} aria-label={`button to select ${item} as answer`} className={`answer-options ${toBeHighlighted === item ? "highlight" : ""
                }  ${toBeHighlighted === answer ? "highlight-correct" : "highlight-wrong"}  ${(showCorrectAnswerToUser && item === answer) ? "correct-answer-shown-to-user" : ""}`}

                onClick={() => {
                    if (toBeHighlighted === "") {
                        settoBeHighlighted(item);
                        if (!correctSelected) {
                            if (item === answer) {
                                setCount((count) => count + 1);
                                setcorrectSelected(!correctSelected);
                            }
                            else {
                                setshowCorrectAnswerToUser(true);

                            }
                        }
                        else {
                            if (item !== answer) {
                                setCount((count) => count - 1);
                                setcorrectSelected(!correctSelected);
                                setshowCorrectAnswerToUser(true);

                            }
                            else {
                                setCount((count) => count - 1);
                                setcorrectSelected(!correctSelected);

                            }
                        }
                    }

                }
                }
            >
                {item} </button >
        );
    });
    return (
        <div className="accordion">
            <div className={`question-flexbox ${darkTheme ? "dark-background" : ""}`} aria-expanded={showOptions}>
                <button aria-expanded={showOptions} className="question-accordion" onClick={() => {
                    setshowOptions(!showOptions);
                }}>{title}</button>
            </div>


            {showOptions &&
                (<div className={`answer-container ${darkTheme ? "dark-background" : ""}`}>
                    {listOfOptions}
                </div>)
            }
        </div>
    );


}
export default Accordion;