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