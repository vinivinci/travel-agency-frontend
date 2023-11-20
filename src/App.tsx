import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import AppRoutes from './components/Routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <AppRoutes />

    </>
  );
}

export default App;
