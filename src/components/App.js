import React from 'react';
import { FullPost } from './pages/FullArticle';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Profile } from './components/Profile';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/post/:id" element={<FullPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<h3>404 not found</h3>}></Route>
        </Route>
      </Routes>
    </>
  );
}
