import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListVehicles from './pages/ListVehicles'
import Inquires from './pages/Inquires'

const App = () => (
  <BrowserRouter>
    <div class="container-fluid">
      <Routes>
        <Route exact path="/" element={<ListVehicles />} />
        <Route exact path="/inquire" element={<Inquires />} />
      </Routes>
    </div>
  </BrowserRouter>
)

export default App;
