import "./Header.css";
import { useState } from 'react'

import NavMenu from "./NavMenu.jsx"

function Header({ setPage, darkTheme, setdarkTheme, avatarName, setopenMainModalThroughHeader, openMainModalThroughHeader, sethamburgerMenuOpen, hamburgerMenuOpen, showMainModal, setShowMainModal }) {

    const themeDecider = (e) => {
        setdarkTheme(e === "dark");
    }
    const handleAvatarButtonClick = () => {
        setopenMainModalThroughHeader(!openMainModalThroughHeader);
        setShowMainModal(!showMainModal);
    }

    return (
        <>
            <a href="#main" className="skiplink">SkipLink</a>
            <header className={`header ${darkTheme ? "dark-background" : ""}`}>
                <div className="avatar-and-theme-container">
                    {(avatarName == "") && <button aria-label="button to open the modal for entering user's Avatar Name" className="avatar-button" onClick={handleAvatarButtonClick} >I want an avatar</button>}
                    {(avatarName != "") &&
                        <div className="avatar-name-container">
                            Welcome {avatarName}
                        </div>
                    }
                    <div className="theme-container">
                        <div className="dark-container">
                            <label htmlFor="dark-theme" className="dark-theme-label" aria-label="Dark Theme"></label>
                            <input aria-label="radio button to choose dark theme" type="radio" name="theme" id="dark-theme" className="dark-theme-image" onChange={() => {
                                themeDecider("dark")
                            }} ></input>
                        </div>

                        <div className="light-container">
                            <label htmlFor="light-theme" className="light-theme-label" aria-label="Light Theme"></label>
                            <input aria-label="radio button to choose light theme" type="radio" name="theme" id="light-theme" className="light-theme-image" onChange={() => {
                                themeDecider("light")
                            }} ></input>

                        </div>


                    </div>



                </div>


                <div className="header-container">
                    <div className="heading-container">
                        <h1 className="header-title">
                            World Quiz Application
                        </h1>
                    </div>

                </div>
                <div className="navigation-container">
                    <NavMenu className="header-nav" setPage={setPage} sethamburgerMenuOpen={sethamburgerMenuOpen} hamburgerMenuOpen={hamburgerMenuOpen} />
                </div>

            </header >

        </>

    );
}
export default Header;