import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import HomeButton from './components/HomeButton';
import { CgHomeScreen } from 'react-icons/cg';

const App = () => {
  return (
    <main>
      <div className="iPhoneFrame">
        <div className="iPhoneContent">
          <Outlet />
          <HomeButton />
        </div>
      </div>
      <Link to="/" className="home-btn">
        <CgHomeScreen />
      </Link>
    </main>
  );
};

export default App;
