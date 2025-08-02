import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // default import
import { Title } from "./components/Header"; // named  import
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * Header -
 *  - logo(Title)
 *  - nav items(right side)
 *  - cart
 * Body
 *  - search bar
 *  - restraurant list
 *  - restraurant cards
 *   - image
 *   - name
 *   - rating
 *   - cusines
 * Footer
 *  - links
 *  - copyrights
 *
 */

// Building in Config driven UI

// props - properties
// passing some props means passing some data into the component

const AppLayout = () => {
  console.log("Root file loaded");
  return (
    <React.Fragment>
      <Header />
      {/* <Body /> */}
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
