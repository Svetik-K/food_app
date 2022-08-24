import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CataloguePage } from './pages/CataloguePage/CataloguePage';



function App() {
  return (
    <div className='app-body'>
      <CataloguePage></CataloguePage>
      
    </div>


  );
}

export default App;


    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Cards />} />
    //     <Route path='/card' element={<Card />} />
    //   </Routes>
    // </BrowserRouter>

    // API Key
    // 7bee5a1c625b4f02a84298107297cb68