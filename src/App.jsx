import { useState } from "react";
//Import Pages
import LandingPage from "./pages/LandingPage";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <LandingPage />
    </div>
  );
}

export default App;
