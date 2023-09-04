import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Navbar, MobileNav, MobileInitial } from "./Navigation.style";
import { getWindowDimensions } from "./utils";
import burger from "./images/burger.png";
import close from "./images/close.png";
import NavLinks from "./NavLinks";

const Navigation: React.FC = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);

  const navBar = useMemo(() => {
    if (windowDimensions.width > 540) {
      return (
        <Navbar>
          <div>
            <ul className="main-nav">
              <NavLinks />
            </ul>
          </div>
        </Navbar>
      );
    } else {
      if (!menuOpen) {
        return (
          <MobileInitial>
            <img src={burger} alt="menu" onClick={handleMenu} />
          </MobileInitial>
        );
      } else {
        return (
          <MobileNav>
            <img src={close} alt="menu" onClick={handleMenu} />
            <div>
              <ul className="mobile-nav">
                <NavLinks mobileLinkClick={handleMenu} />
              </ul>
            </div>
          </MobileNav>
        );
      }
    }
  }, [windowDimensions, handleMenu, menuOpen]);

  return navBar;
};

export default Navigation;
