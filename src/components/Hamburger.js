import React, { useEffect } from 'react';
import '../styles/Hamburger.css';

export default function Hamburger() {
  useEffect(() => {
    const menu_bar = document.getElementById("menu-icon");
    const nav = document.getElementById("navbar-nav");
    const navlist = document.getElementById("navlist-1");
    const menu_bg = document.getElementById("menu-bg");

    function menuOnClick() {
      menu_bar.classList.toggle("change");
      nav.classList.toggle("navbar-nav-show");
      navlist.classList.toggle("navlist-1-show");
      menu_bg.classList.toggle("change-bg");
    }

    function handleDocumentClick(event) {
      const isMenuClicked = menu_bar.contains(event.target) || menu_bg.contains(event.target);
      const isMenuOpen = nav.classList.contains("navbar-nav-show");

      if (!isMenuClicked && isMenuOpen) {
        menuOnClick();
      }
    }

    menu_bar.addEventListener("click", menuOnClick);
    document.addEventListener("click", handleDocumentClick);

    return function cleanup() {
      menu_bar.removeEventListener("click", menuOnClick);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div id="menu-icon">
      <div id="bar1" className="bar"></div>
      <div id="bar2" className="bar"></div>
      <div id="bar3" className="bar"></div>
    </div>
  );
}
