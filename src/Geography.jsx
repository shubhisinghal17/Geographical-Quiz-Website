import { useState } from 'react';
import GeographyQA from "./GeographyQA.js";
import Accordion from "./Accordion.jsx";
import "./Geography.css"
function Geography({ darkTheme }) {
    const [showFinalScore, setshowFinalScore] = useState(false);
    const [count, setCount] = useState(0);
    return (
        <div id="main" className={`geography-page-class ${darkTheme ? "dark-background" : ""}`}>
            <div className="geography-container">
                {GeographyQA.map((content) => (
                    <Accordion
                        key={content.id}
                        className="about-geography"
                        title={content.Question}
                        answer={content.Answer}
                        options={content.Options}
                        setCount={setCount}
                        darkTheme={darkTheme}
                    />
                ))}
            </div>


            <div className={`score-panel ${showFinalScore ? "" : ""}`}>
                <button className="geography-result-heading" onClick={() => {
                    setshowFinalScore(!showFinalScore);
                }}>
                    Want to Know Your Score?
                </button>
                {showFinalScore && <div className="geography-final-score">{count}</div>}
            </div>
        </div>


    );
}


export default Geography;

