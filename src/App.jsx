import { useState, useRef, useEffect } from 'react'
import './App.css'
import Header from "./Header.jsx";
import Geography from "./Geography.jsx";
import Home from "./Home.jsx";
import Places from "./Places.jsx";
import Feedback from './Feedback.jsx';
import Footer from "./Footer.jsx";

function App() {
  const [page, setPage] = useState("World Trivia");
  const [darkTheme, setdarkTheme] = useState(false);
  const [showMainModal, setShowMainModal] = useState(true);
  const [hasMainModalClosed, setHasMainModalClosed] = useState(false);
  const [avatarName, setavatarName] = useState("");
  const [tempAvatarName, setTempAvatarName] = useState("");
  const [avatarEmpty, setavatarEmpty] = useState(true);
  const [placesModalIsOpen, setplacesModalIsOpen] = useState(false);
  const [hamburgerMenuOpen, sethamburgerMenuOpen] = useState(false);
  const [openMainModalThroughHeader, setopenMainModalThroughHeader] = useState(false);
  const [openMainModalThroughFooter, setopenMainModalThroughFooter] = useState(false);

  const mainModalRef = useRef();
  useEffect(() => {
    if (showMainModal) {
      mainModalRef.current.showModal();
    } else {
      mainModalRef.current.close();
    }
  }, [showMainModal]);
  const handleAvatarNameChange = (e) => {
    setTempAvatarName(e.target.value);
    if (e.target.value != "") {
      setavatarEmpty(false);
    }
    else {
      setavatarEmpty(true);
    }
  };
  const handleClickedRegisterButton = () => {
    if (tempAvatarName == "") {
      setavatarEmpty(true);

    }
    else {
      setavatarName(tempAvatarName);
      mainModalRef.current.close();
      setShowMainModal(!showMainModal);
      setHasMainModalClosed(!hasMainModalClosed);
      setavatarEmpty(false);
    }

  };
  useEffect(() => {
    const handleEscapeonMainModal = (event) => {
      if (event.key === 'Escape' && showMainModal) {
        setShowMainModal(!showMainModal);
        mainModalRef.current.close();
      }
    };
    window.addEventListener('keydown', handleEscapeonMainModal);
    return () => {
      window.removeEventListener('keydown', handleEscapeonMainModal);
    };
  }, [showMainModal]);

  useEffect(() => {
    if (openMainModalThroughHeader) {
      mainModalRef.current.showModal();
    }

  }, [openMainModalThroughHeader]);

  useEffect(() => {
    if (openMainModalThroughFooter) {
      mainModalRef.current.showModal();
    }

  }, [openMainModalThroughFooter]);
  return (
    <>
      <Header setPage={setPage} darkTheme={darkTheme} setdarkTheme={setdarkTheme} avatarName={avatarName} setopenMainModalThroughHeader={setopenMainModalThroughHeader} openMainModalThroughHeader={openMainModalThroughHeader} sethamburgerMenuOpen={sethamburgerMenuOpen} hamburgerMenuOpen={hamburgerMenuOpen} showMainModal={showMainModal} setShowMainModal={setShowMainModal} />
      {(page === "World Trivia") && <Geography darkTheme={darkTheme} />}
      {/* {(page === "Home") && <Home />} */}
      {(page === "Image Quiz") && <Places placesModalIsOpen={placesModalIsOpen} setplacesModalIsOpen={setplacesModalIsOpen} hamburgerMenuOpen={hamburgerMenuOpen} sethamburgerMenuOpen={sethamburgerMenuOpen} darkTheme={darkTheme} />}
      {(page === "Feedback") && <Feedback darkTheme={darkTheme} />}
      <Footer darkTheme={darkTheme} openMainModalThroughFooter={openMainModalThroughFooter} setopenMainModalThroughFooter={setopenMainModalThroughFooter} showMainModal={showMainModal} setShowMainModal={setShowMainModal} />

      <dialog ref={mainModalRef} className={`main-modal-container ${!showMainModal ? "hide-main-modal" : ""} ${darkTheme ? "dark-main-modal" : ""} `}>
        <form action="/submit" method="POST" className={`main-modal-form-container ${darkTheme ? "dark-main-modal" : ""}`}>

          <div className={`main-modal-avatar-container ${darkTheme ? "dark-main-modal" : ""}`}>
            <label htmlFor="avatar-name">Avatar Name</label>
            {avatarEmpty && <p>
              It is mandatory to write your Avatar to Register
            </p>}
            <input type="text" name="avatar-name" id="avatar-name" className="input-field-main-modal" value={tempAvatarName} onChange={handleAvatarNameChange}></input>
          </div>
          <div className={`main-modal-email-container ${darkTheme ? "dark-main-modal" : ""}`}>
            <label htmlFor="avatar-email">E-Mail</label>
            <input type="avatar-email" name="avatar-email" id="avatar-email" className="input-field-main-modal" ></input>
          </div>
          <button type="button" visual="button" className={`main-modal-button ${darkTheme ? "dark-main-modal" : ""}`} onClick={handleClickedRegisterButton}
          >
            Register
          </button>
        </form>
      </dialog >
    </>
  );
}

export default App
