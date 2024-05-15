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
import MasonryThreeCols from '@/components/Portfolio/Masonry/3Col';

function PortfolioMasonry3() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Masonry 3."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Portfolio Masonry 3 Col</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg">
        <Header data={metadata} />
        <MasonryThreeCols />
      </main>
      <Footer subBg />
    </>
  )
}

PortfolioMasonry3.getLayout = page => <Layout>{page}</Layout>

export default PortfolioMasonry3;