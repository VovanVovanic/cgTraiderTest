import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './modules/header';
import './app.scss'
import classnames from 'classnames';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './pages/main';
import Cart from './pages/cart';
import Category from './pages/category';
import { PageInfoType } from './types';

function App() {
  const [pageInfo, setPageInfo] = useState<PageInfoType>({ url: "", title: "" })
  return (
    <BrowserRouter>
      <main className={classnames('app')}>
        <Header setPageInfo={setPageInfo} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category" element={<Category pageInfo={pageInfo} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
