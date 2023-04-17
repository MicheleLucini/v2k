import React from "react";
import { ROUTES, useNavigator } from "../contexts/NavigatorContext";
import Home from "../home/Home";

const AppRouting = () => {
  const { checkCurrentRoute } = useNavigator();
  return (
    <>
      {checkCurrentRoute(ROUTES.HOME) && <Home />}
    </>
  );
};

export default AppRouting;
