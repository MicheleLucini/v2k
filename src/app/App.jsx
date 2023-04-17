import React from "react";
import { NavigatorProvider } from "../contexts/NavigatorContext";
import AppRouting from "./AppRouting";
import AppTopBar from "./AppTopBar";
// import AppFooter from "./AppFooter";
import "./app.css";

const App = () => {
  return (
    <NavigatorProvider>
      <div id="facade">
        <div></div>
      </div>
      <div className="page">
        <AppTopBar />
        {/* <div className={styles.page}>
      <div className={styles.body}> */}
        <AppRouting />
        {/* </div>
        <AppFooter />
      </div> */}
      </div>
    </NavigatorProvider>
  );
};

export default App;
