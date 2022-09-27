import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { React } from 'react';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
