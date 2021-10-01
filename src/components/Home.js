import React, { useState, useEffect } from "react";
import Header from "./Header";
import Menus from "./Menus";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Todoboard from "./Todoboard";

const switchContent = (number) => {
  switch (number) {
    case 1:
      return <Dashboard />;
    case 2:
      return <Todoboard />;
    default:
      return <Dashboard />;
  }
};

export const Home = () => {
  const [showNumber, setShowNumber] = useState(1);
  return (
    <div class="wrapper">
      <Header setShowNumber={setShowNumber} />
      <Menus />
      {switchContent(showNumber)}
      <Footer />
    </div>
  );
};
