import React from 'react';
import '../styles/globals.css';
import MainLayout from '../components/layout/MainLayout';
import { useRouter } from 'next/router';
const App = ({ Component, pageProps }) => {
  const router = useRouter()
  console.log(router)
  return (
    <>
    <MainLayout>
      <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default App;
