import React from "react";
import ButtonDoubleText from '../components/buttonDoubleText/ButtonDoubleText';
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
  // const { checkCurrentRoute } = useNavigator();

  return (
    <>
      <div className="menu-btn-wrapper">
        <button id="btnMenu" className="menu-btn hover-grow close">
          <div className="line uno"></div>
          <div className="line due"></div>
        </button>
      </div>

      <div className="header">
        <img src={Logo} alt="Logo" />
        {/* <ButtonDoubleText text="Prezzi" /> */}
        <ButtonMarquee text="Contattaci" />
        <div></div>
      </div>
    </>
  );
};

export default AppTopBar;
