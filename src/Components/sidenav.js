import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import {
    AiOutlineHome,
    AiOutlineAlignLeft,
    AiOutlineCustomerService,
    AiOutlineUser,
    AiOutlineClose,
    AiOutlineMenu
  } from "react-icons/ai";

const Sidenav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "600px" });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMobileMenu = () => {
        if (isMobile) {
        setIsMenuOpen(false);
        }
    };

    const renderNavLinks = () => {
        const listClassName = isMobile ? "nav__list" : "nav__list__web";
        // const linkClassName = "nav__link";
        // const buttonClassName = "nav__cta";

        return (
            <ul className={listClassName}>
                <li>
                    <Link to={`/`} onClick={closeMobileMenu}>
                        <span className="icon2"><AiOutlineHome /></span>
                        <span class="text">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to={`/music`} onClick={closeMobileMenu}>
                        <span className="icon2"><AiOutlineCustomerService /></span>
                        <span class="text">Music</span>
                    </Link>
                </li>
                <li>
                    <Link to={`/scribbles`} onClick={closeMobileMenu}>
                        <span className="icon2"><AiOutlineAlignLeft /></span>
                        <span class="text">Scribbles</span>
                    </Link>
                </li>
                <li>
                    <Link to={`/about`} onClick={closeMobileMenu}>
                        <span className="icon2"><AiOutlineUser /></span>
                        <span class="text">About</span>
                    </Link>
                </li>
            </ul>
        );
    };
    return (
        <header className="header">
            <nav className="nav">
                {isMobile && (
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <AiOutlineMenu />
                    </div>
                )}
                {isMobile ? (
                    <div
                    className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
                    id="nav-menu"
                    >
                        {renderNavLinks()}
                        <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                            <AiOutlineClose />
                        </div>
                    </div>
                ) : (
                    renderNavLinks()
                )}
            </nav>
        </header>
    );
};

export default Sidenav;