import React from "react";
import { NavigatorProvider } from "../contexts/NavigatorContext";
import AppRouting from "./AppRouting";
import AppTopBar from "./AppTopBar";
import AppFooter from "./AppFooter";
import "./app.css";

const App = () => {
  return (
    <NavigatorProvider>
      <div className="page">
        <AppTopBar />
        <AppRouting />
        <AppFooter />
      </div>
    </NavigatorProvider>
  );
};

export default App;
