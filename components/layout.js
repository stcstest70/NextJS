import React from 'react';
import Header from './header';
import Footer from './Footer';
import Meta from './Meta';
import { Mulish } from 'next/font/google';

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
});


const RootLayout = ({ children }) => (
  <>
  <Meta />
  <Header />
  {children}
  <Footer />
  </>
);

export default RootLayout;