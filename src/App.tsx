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
import Movie from './pages/movie';
import { IchartItem } from './redux/cart/types';
import { Provider } from 'react-redux';
import store from './redux/store';
import Payment from './pages/payment';

function App() {
  const [pageInfo, setPageInfo] = useState<PageInfoType>({ url: "", title: "" })
  const [details, setDetails] = useState<IchartItem | null>(null)
  return (
    <Provider store={store}>
    <BrowserRouter>
      <main className={classnames('app')}>
        <Header setPageInfo={setPageInfo} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category" element={<Category pageInfo={pageInfo} setDetails={setDetails} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Payment" element={<Payment />} />
          <Route path="/movie" element={<Movie details={details} />} />
        </Routes>
      </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
