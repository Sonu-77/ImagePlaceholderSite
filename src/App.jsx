import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlaceholderDesign from "./component/PlaceholderDesign";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/:width/:height/:bg/:color/:text"
          element={<PlaceholderDesign />}
        />
      </Routes>
    </>
  );
}

export default App;
