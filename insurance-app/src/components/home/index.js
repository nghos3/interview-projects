import React from 'react';
import './styles.scss';
import Nav from '../nav';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import DataSearch from '../pages/DataSearch/DataSearch';
import Graph from '../pages/Graph/Graph';
function Homepage() {
  const classname = 'homepage';
  return ( 
    <div className={classname}>
      <Router>
        <Nav />
        <div className={`${classname}-body`}>
          <Routes >
            <Route path='/' element={<DataSearch />} />
            <Route path='/graph' element={<Graph />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default Homepage;
