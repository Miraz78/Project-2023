import React from 'react';
import { BrowserRouter as BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from '../common-components/pages/Home';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

