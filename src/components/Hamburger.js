import React, { useEffect } from 'react';
import '../styles/Hamburger.css';

export default function Hamburger() {
  useEffect(() => {
    const menu_bar = document.getElementById("menu-icon")
    const nav = document.getElementById("navbar-nav")
    const navlist = document.getElementById("navlist-1")
    const menu_bg = document.getElementById("menu-bg")
    function menuOnClick() {
      menu_bar.classList.toggle("change");
      nav.classList.toggle("navbar-nav-show");
      navlist.classList.toggle("navlist-1-show");
      menu_bg.classList.toggle("change-bg");
    }
    menu_bar.addEventListener("click", menuOnClick)
    return function () {
      menu_bar.removeEventListener("click", menuOnClick)
    }
  }, [])
  return (
    <div id="menu-icon">
      <div id="bar1" className="bar"></div>
      <div id="bar2" className="bar"></div>
      <div id="bar3" className="bar"></div>
    </div>
  );
}
