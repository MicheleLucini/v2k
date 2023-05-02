import React, { useState, useCallback, useEffect } from "react";
// import ButtonDoubleText from '../components/buttonDoubleText/ButtonDoubleText';
import ButtonMarquee from '../components/buttonMarquee/ButtonMarquee';
import Logo from '../assets/Logo.svg'
// import { useSelector } from 'react-redux';
// import { selectUser } from '@store/userSlice';
// import { ROUTES, useNavigator } from "@contexts/NavigatorContext";
// import Logo from "@components/svgs/Logo";
// import Icon from "@components/icon";
// import Link from "@components/link";
// import styles from "./AppTopBarUser.module.css";
import "./appTopBar.css";

const AppTopBar = () => {
  const [menuAppear, setMenuAppear] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const [menuBtnDisabled, setMenuBtnDisabled] = useState(false);

  // const { checkCurrentRoute } = useNavigator();  

  const openMenu = useCallback(() => {
    setMenuBtnDisabled(true);
    setTimeout(() => setMenuBtnDisabled(false), 1000);

    setMenuAppear(true)
    setTimeout(() => setMenuOpen(true), 1);
  }, []);


  const closeMenu = useCallback(() => {
    setMenuBtnDisabled(true);
    setTimeout(() => setMenuBtnDisabled(false), 1000);

    setMenuOpen(false)
    setTimeout(() => setMenuAppear(false), 1000);
    return false;
  }, []);

  useEffect(() => {
    if (menuAppear) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuAppear])

  return (
    <>
      <div className="header">
        <img src={Logo} alt="Logo" />
        {/* <ButtonDoubleText text="Prezzi" /> */}
        <ButtonMarquee text="Contattaci" />
        <div className="menu-btn-wrapper">
          <button
            className={"menu-btn hover-grow " + (menuOpen === true ? "open" : "") + (menuOpen === false ? "close" : "")}
            onClick={menuAppear ? closeMenu : openMenu}
            style={{ pointerEvents: menuBtnDisabled ? "none" : "auto" }}
          >
            <div className="line uno"></div>
            <div className="line due"></div>
          </button>
        </div>
        <div className={"menu " + (menuOpen === true ? "open" : "") + (menuAppear === true ? " appear" : "")}>
          <div className="menu-overlay" onClick={closeMenu} />
          <div className="menu-box" style={{ top: window.scrollY }}>
            <a>
              <span className="double-text">
                <span data-text={"Distributori per snacks e bevande fredde"}>{"Distributori per snacks e bevande fredde"}</span>
              </span>
            </a>
            <a>
              <span className="double-text">
                <span data-text={"Distributori bevande calde"}>{"Distributori bevande calde"}</span>
              </span>
            </a>
            <a>
              <span className="double-text">
                <span data-text={"Macchine per caffè in cialde ocs"}>{"Macchine per caffè in cialde ocs"}</span>
              </span>
            </a>
            <a>
              <span className="double-text">
                <span data-text={"Dispenser acqua"}>{"Dispenser acqua"}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppTopBar;
