import { useState, useEffect } from "react";
import "./NavMenu.css";
import NavigationMenu from "./NavigationMenu.js";

function NavMenu({ className, setPage, sethamburgerMenuOpen, hamburgerMenuOpen }) {
    const [showMenu, setShowMenu] = useState(false);
    const list = NavigationMenu.map(item => {
        return (
            <li key={item.name} className="main-menu-item">
                <a
                    className="main-menu-link"
                    href={item.path}
                    onClick={(e) => {
                        e.preventDefault();
                        setPage(item.name);
                    }
                    }>

                    {item.name}
                </a>
            </li>
        );
    });
    useEffect(() => {
        const handleEscapeMenu = (event) => {
            if (event.key === "Escape" && showMenu) {
                setShowMenu(!showMenu);
                sethamburgerMenuOpen(!showMenu);
            }
        };
        window.addEventListener("keydown", handleEscapeMenu);
        return () => {
            window.removeEventListener("keydown", handleEscapeMenu);
        };
    }, [showMenu]);


    return (
        <nav className={`main-menu ${className}`}>
            <button aria-label="hamburger menu"
                onClick={() => {
                    setShowMenu(!showMenu);
                    sethamburgerMenuOpen(!showMenu);
                }} className="submenu"
            ></button>
            <ul className={`main-menu-list ${!showMenu ? 'hamburger-menu' : ''}`}>
                {list}

            </ul>
        </nav >


    );
}
export default NavMenu;




