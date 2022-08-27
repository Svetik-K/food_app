import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecipesPage } from './pages/RecipesPage/RecipesPage';
import { RecipePage } from './pages/RecipePage/RecipePage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RecipesPage />} />
        <Route path='/recipe'>
          <Route path=':id' element={<RecipePage />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;




    // API Key
    // 7bee5a1c625b4f02a84298107297cb68

  //   <div className={styles.body}>
  //   <RecipesPage></RecipesPage>
    // <Route path='/recipe/:id' element={<RecipePage />} />
  // </div>