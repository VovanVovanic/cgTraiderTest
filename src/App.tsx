import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './modules/header';
import './app.scss'
import classnames from 'classnames';
import Main from './pages/main';
import Cart from './pages/cart';
import Horrors from './pages/category';
import { PageInfoType } from './types';

// import pictureA from './a.jpg';
// import pictureB from './b.jpg';



function App() {
  const [pageInfo, setPageInfo] = useState<PageInfoType>({ url: "", title: "" })
  return (
    <BrowserRouter>
      <main className={classnames('app')}>
        <Header setPageInfo={setPageInfo} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category" element={<Horrors pageInfo={pageInfo} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
