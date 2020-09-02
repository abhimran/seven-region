import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { createContext } from 'react';
import { useState } from 'react';
import Country from './components/Country/Country';

export const categoryContex = createContext();

function App() {
  const [category, setCategory] = useState('Asia');
  return (
    <categoryContex.Provider value={[category, setCategory]}>
        <Header></Header>
        <Home></Home>
        <Country></Country>
    </categoryContex.Provider>
  );
}

export default App;
