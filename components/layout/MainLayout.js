

import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useRouter } from 'next/router';

function MainLayout({ children }) {
  const router = useRouter();
  const pathName = router.pathname;
  console.log(pathName);

  return (
    <div>
      {/* <Navbar /> */}
      {children}
      
    </div>
  );
}

export default MainLayout;
