import "./App.css";
import React from "react";
import Page from "./pages/Page";

function App() {
  return (
    <div className="App">
      <Page
        onLogin={() => console.log("login")}
        onLogout={() => console.log("logout")}
        onCreateAccount={() => console.log("create account")}
      />{" "}
      <a href="/storybook">To Storybook</a>
    </div>
  );
}

export default App;
