import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../componnets/Header';

export default function RootLayout() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <footer>footer</footer>
    </>
  );
}
