import Header from "./Header";
import Body from "./Body";
import '../Styles/index.scss';
import Intro from "./Intro";
import React from "react";
import Participation from "./Participation";
import Gamification from "./Gamification";
import Community from "./Community";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <Intro/>
      <Body/>
        <Participation/>
        <Gamification/>
        <Community/>
      <Footer/>

    </div>
  );
}

export default App;
