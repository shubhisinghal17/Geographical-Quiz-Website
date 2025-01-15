import { useState, useEffect, useRef } from 'react'
import './Places.css'
import Card from "./Card.jsx";
import "./Card.css";
import PlacesQA from "./PlacesQA.js";

function Places({ placesModalIsOpen, setplacesModalIsOpen, hamburgerMenuOpen, sethamburgerMenuOpen, darkTheme }) {
    const [totalScore, setTotalScore] = useState(0);
    const [countDown, setCountDown] = useState(60);
    const [showFacts, setShowFacts] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const [hasModalClosed, setHasModalClosed] = useState(false);
    const timerID = useRef();
    const modalRef = useRef();
    useEffect(() => {
        if (hasModalClosed) {
            timerID.current = setInterval(() => {
                setCountDown(curr => {
                    if (curr <= 1) {
                        clearInterval(timerID.current);
                        setShowFacts(true);
                        return 0;
                    }
                    return curr - 1;
                });
            }, 1000);

            return () => {
                clearInterval(timerID.current);
            };
        }

    }, [hasModalClosed]);
    useEffect(() => {
        modalRef.current.showModal();
    }, []);
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === "Escape" && hamburgerMenuOpen == true && showModal == true) {
                sethamburgerMenuOpen(!hamburgerMenuOpen)
            }
            else if (e.key === "Escape" && hamburgerMenuOpen == false && showModal == true) {
                if (modalRef.current) {
                    modalRef.current.close();
                }
                setShowModal(!showModal);
                setHasModalClosed(!hasModalClosed);
                return () => {
                    window.removeEventListener('keydown', handleEscKey);
                };

            }
            else if (showModal == false) {

            }
        }
        window.addEventListener("keydown", handleEscKey);
    }, [hamburgerMenuOpen, showModal])

    return (
        <>
            <div id="main" className={`places-container  ${darkTheme ? "dark-background" : ""}`}>
                <div className='places-heading'>
                    <h2 className={`cards-container-heading ${darkTheme ? "dark-background" : ""}`}>Where on Earth is that?</h2>
                    <div className={`score-container ${darkTheme ? "dark-background" : ""}`}>
                        <h2 className='score-items'>Your Score</h2>
                        <h2 className='score-items'>{totalScore}</h2>
                    </div>
                </div>
                <div className={`timer-container ${darkTheme ? "dark-background" : ""}`}>
                    <h2 className='timer-items'>Time Remaining</h2>
                    <h2 className='timer-items'>{countDown} seconds</h2>
                </div>

                {PlacesQA.map((content) =>
                (
                    <Card className="individual-card"
                        key={content.id}
                        src={content.img_location}
                        answer={content.Answer}
                        options={content.Options}
                        fact={content.Fact}
                        alt={content.alt}
                        setTotalScore={setTotalScore}
                        countDown={countDown}
                        showFact={showFacts}
                        darkTheme={darkTheme}
                    />

                ))
                }
            </div>
            <dialog ref={modalRef} className={`modal-container ${!showModal ? 'hide-modal' : ''} ${darkTheme ? "dark-background" : ""}`}>
                <div>
                    <h3 className={`text-in-modal ${darkTheme ? "dark-background" : ""}`}>Here you will guess the Place based on the image provided</h3>
                    <h3 className={`text-in-modal ${darkTheme ? "dark-background" : ""}`}>BUT</h3>
                    <h3 className={`text-in-modal ${darkTheme ? "dark-background" : ""}`}>You will get only 10 seconds to answer the questions, post which all the answers will be shared with you</h3>
                    <p className={`text-in-modal ${darkTheme ? "dark-background" : ""}`}>
                        ALSO, you cannot resubmit your answer
                    </p>
                    <p className={`text-in-modal ${darkTheme ? "dark-background" : ""}`}>
                        Meaning, you get only a SINGLE GO to submit your answer
                    </p>
                    <p className={`text-in-modal ${darkTheme ? "dark-background" : ""}`}>So, you better be Confident before answering!!</p>

                </div>
                <button type="button" visual="button" className="modal-button" onClick={() => {
                    modalRef.current.close();
                    setShowModal(false);
                    setHasModalClosed(true);
                }
                }>
                    I Understand. I will take the Quiz Now

                </button>

            </dialog>

        </>
    );
}
export default Places;