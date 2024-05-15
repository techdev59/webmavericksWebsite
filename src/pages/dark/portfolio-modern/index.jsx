<<<<<<< HEAD
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
import ModernGrid from '@/components/Portfolio/ModernGrid';


function PortfolioModern() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Modern Grid."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Portfolio Modern</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg">
        <Header data={metadata} />
        <ModernGrid />
      </main>
      <Footer subBg />
    </>
  )
}

PortfolioModern.getLayout = page => <Layout>{page}</Layout>

=======
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
import ModernGrid from '@/components/Portfolio/ModernGrid';


function PortfolioModern() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Modern Grid."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Portfolio Modern</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg">
        <Header data={metadata} />
        <ModernGrid />
      </main>
      <Footer subBg />
    </>
  )
}

PortfolioModern.getLayout = page => <Layout>{page}</Layout>

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default PortfolioModern;