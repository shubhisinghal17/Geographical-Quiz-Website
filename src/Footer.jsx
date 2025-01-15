import "./Footer.css"
function Footer({ darkTheme, openMainModalThroughFooter, setopenMainModalThroughFooter, showMainModal, setShowMainModal }) {
    const handleAvatarButtonClickinFooter = () => {
        setopenMainModalThroughFooter(!openMainModalThroughFooter);
        setShowMainModal(!showMainModal);
    }
    return (
        <footer className={`footer-class ${darkTheme ? "dark-background" : ""}`}>
            <ul className="footer-link">
                <li><a href="https://www.britannica.com/quiz/">Quiz Website</a></li>
                <li><a href="https://unsplash.com/">Image Sources</a></li>
                <li><a href="https://the-trivia-api.com/">API Source</a></li>
                <button className="footer-modal-button" visual="link" onClick={handleAvatarButtonClickinFooter}>Edit Avatar Name</button>
            </ul>
        </footer>

    );


}
export default Footer;