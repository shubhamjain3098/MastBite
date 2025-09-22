import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <div>
      <>
        <Provider store={appStore}>
          <Header />
          <Outlet />
          <Footer />
        </Provider>
      </>
    </div>
  );
}

export default App;
