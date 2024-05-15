import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Team/Header';
import Team from '@/components/InnerPages/Team/Team';
import Testimonials from '@/components/InnerPages/Team/Testimonials';
import CallToAction from '@/components/Startup/CallToAction';
import Footer from '@/components/Startup/Footer';


function PageTeamLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Our Team</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode />
      <main>
        <Header />
        <Team />
        <Testimonials />
        <CallToAction innerPageStyle />
      </main>
      <Footer lightMode />
    </>
  )
}

PageTeamLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default PageTeamLight;