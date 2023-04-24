import React from "react";
import ImgLogoML from '../assets/ml.png'

const AppFooter = () => {
  return (
    <div className="footer">
      <span>© 2000 - 2023 Vending 2000 S.R.L.</span>
      <span>Design & Development</span>
      <img src={ImgLogoML} alt="Logo Michele Lucini" />
    </div>
  );
};

export default AppFooter;
