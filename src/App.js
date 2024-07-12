import './App.css';
import { BrowserRouter, Route, NavLink, Routes, Navigate, Link } from 'react-router-dom'

import React, { useState } from 'react';

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Article from './pages/Article'
import FormArticle from './pages/FormArticle'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/new">New Article</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/:urlId" element={<Article />} />
          <Route path="/new" element={<FormArticle />} />
          <Route path="/edit/:id" element={<FormArticle />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
