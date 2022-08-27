import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import { RecipePage } from "./pages/RecipePage/RecipePage";
import { RecipesPage } from "./pages/RecipesPage/RecipesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipesPage />} />
        <Route path="/recipe">
          <Route path=":id" element={<RecipePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// API Key 7bee5a1c625b4f02a84298107297cb68
