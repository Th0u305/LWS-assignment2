import React from "react";
import Navbar from "./components/navbar/Navbar";
import MainContent from "./components/mainContent/MainContent";
import "./App.css"

const App = () => {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <Navbar />
      <MainContent/>
    </div>
  );
};

export default App;
