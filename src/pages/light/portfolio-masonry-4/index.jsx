import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Startup/Footer';
import Header from '@/components/Portfolio/Header';
import MasonryFourCols from '@/components/Portfolio/Masonry/4Col';

function PortfolioMasonry4Light() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Masonry 4."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Portfolio Masonry 4 Col</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode />
      <main className="main-bg">
        <Header data={metadata} />
        <MasonryFourCols />
      </main>
      <Footer subBg lightMode />
    </>
  )
}

PortfolioMasonry4Light.getLayout = page => <Layout lightMode>{page}</Layout>

export default PortfolioMasonry4Light;