import React from 'react';
import Header from './modules/header';
import './app.scss'
import classnames from 'classnames';
import Comedy from './pages/comedy';
// import pictureA from './a.jpg';
// import pictureB from './b.jpg';

function cartItems() {
  return []
}

function App() {
  return (
    <main className={classnames('app')}>
      <Header />
      <Comedy />
    </main>
  );
}

export default App;
