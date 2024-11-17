import "../Css/Home.css";
import React from "react";
import Nabar from "./Nabar";
import Login from "./Login";
import Tv from "../Shows/Tv/Tv";
import Mobile from "../Shows/Mobile/Mobile";
import Mac from "../Shows/Mac/Mac";
import Picture from "../Shows/Picture/Picture";
import Guide from "../Shows/Guide/Guide";
import Footer from "./Footer";

const Home = ({ email, setEmail }) => {
  return (
    <div className="home-container">
      <Nabar />
      <img
        src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
        alt="Background"
        className="background-image "
      />
      <Login email={email} setEmail={setEmail} />
      <Tv />
      <Mobile />
      <Mac />
      <Picture />
      <Guide />
      <Footer />
    </div>
  );
};

export default Home;
