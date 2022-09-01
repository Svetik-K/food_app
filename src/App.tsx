import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes from "@config/Routes";

import styles from "./App.module.scss";
import { RecipePage } from "./pages/RecipePage/RecipePage";
import { RecipesPage } from "./pages/RecipesPage/RecipesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.index} element={<RecipesPage />} />
        <Route path="/recipe">
          <Route path=":id" element={<RecipePage />}></Route>
        </Route>
        <Route path="*" element={<Navigate to={routes.index} replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// API Key 7bee5a1c625b4f02a84298107297cb68
