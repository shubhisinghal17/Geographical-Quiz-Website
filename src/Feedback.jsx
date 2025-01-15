import { useState, useEffect, useRef } from 'react';
import "./Feedback.css";
import Topics from "./Topics";
function Feedback({ darkTheme }) {
    const [optionSelected, setOptionSelected] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputAlternateEmail, setInputAlternateEmail] = useState("");
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const topicSelected = (e) => {
        setOptionSelected(e.target.value);
    };
    const altEmailChange = (e) => {
        setInputAlternateEmail(e.target.value);
    }
    const emailchange = (e) => {
        setInputEmail(e.target.value);
        if (checkboxChecked) {
            setInputAlternateEmail(e.target.value);
        }

    }
    return (
        <div id="main" className={`feedback-page-class ${darkTheme ? "dark-background" : ""}`}>
            <form action="/submit" method="POST" className={`form-container ${darkTheme ? "dark-background" : ""}`}>
                <div className="user-name-class form-items">
                    <label htmlFor="user-name" className={`name-label ${darkTheme ? "dark-background" : ""}`}>Name</label>
                    <input type="text" name="user-name" id="user-name" className="input-field"></input>
                </div>
                <div className="email-class form-items">
                    <label htmlFor="email" className={`mail-label ${darkTheme ? "dark-background" : ""}`}>E-Mail</label>
                    <input type="email" name="email" id="email" className="input-field" onChange={emailchange}></input>
                </div>
                <div className='checkbox-container form-items'>
                    <label htmlFor="checkbox" className={`checkbox-label ${darkTheme ? "dark-background" : ""}`}>Check if E-Mail and Alternate E-Mail are the same</label>
                    <input type="checkbox" name="checkbox" id="checkbox" className='checkbox-item' onChange={() => {
                        setCheckboxChecked(!checkboxChecked)
                        if (checkboxChecked) {
                            setInputAlternateEmail(inputEmail);
                        } else {
                            setInputAlternateEmail('');
                        }
                    }}></input>
                </div>
                <div className="altername-email-class form-items">
                    <label htmlFor="altername-email" className={`alt-mail-label ${darkTheme ? "dark-background" : ""}`}>Alternate E-Mail</label>
                    <input type="email" name="altername-email" id="altername-email" className="input-field" value={checkboxChecked ? inputEmail : inputAlternateEmail}
                        onChange={altEmailChange} ></input>
                </div>
                <div className="dropdown-class form-items">
                    <label htmlFor="topics" id="dropdown-label" className={`main-topic-label ${darkTheme ? "dark-background" : ""}`}> Which Topic Quizes Would You Like To Subscribe To?</label>
                    <select name="topics" id="topics" className="dropdown-select input-field" value={optionSelected} onChange={topicSelected}>
                        <option value="select-topics" > Select Topics</option>
                        <option value="music" > Music</option>
                        <option value="art" > Art</option>
                        <option value="movies" > Movies</option>
                        <option value="literature" > Literature</option>
                        <option value="others"> Others</option>
                    </select>
                </div>

                {
                    (optionSelected != "" && optionSelected !== "others") &&
                    <div className="dropdown-class form-items">
                        <label htmlFor="topics" id="dropdown-label" className={`subtopic-label ${darkTheme ? "dark-background" : ""}`}> Which Sub-Topic Would You Like?</label>
                        <select name="topics" id="topics" className="dropdown-select input-field" >
                            {Topics.map((content) => {
                                if (content.topic == optionSelected) {
                                    return content.subtopic.map((subtopicTitle, index) =>
                                        <option key={index} value={subtopicTitle} >{subtopicTitle}</option>
                                    )
                                }
                            }
                            )
                            }

                        </select>
                    </div>
                }


                {
                    (optionSelected === "" || optionSelected === "others") &&
                    <div className='user-topic-container'>
                        <label htmlFor="users-topic-input" className='users-topic-input-label'></label>
                        <input type="text" name="users-topic-input" className='users-topic-input input-field' placeholder='Enter Custom Topic'></input>
                    </div>


                }
                <div className="button-class">
                    <button visual="link" type="submit" className="button-element"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >Register</button>
                </div>




            </form >
        </div >

    );
}
export default Feedback;