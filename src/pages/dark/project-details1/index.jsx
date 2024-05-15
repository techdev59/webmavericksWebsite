<<<<<<< HEAD
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/ProjectDetails/Header';
import Content from '@/components/InnerPages/ProjectDetails/Content';
import CallToAction from '@/components/InnerPages/ProjectDetails/CallToAction';
import Footer from '@/components/Startup/Footer';


function ProjectDetails() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Project Details</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header />
        <Content />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

ProjectDetails.getLayout = page => <Layout>{page}</Layout>

=======
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/ProjectDetails/Header';
import Content from '@/components/InnerPages/ProjectDetails/Content';
import CallToAction from '@/components/InnerPages/ProjectDetails/CallToAction';
import Footer from '@/components/Startup/Footer';


function ProjectDetails() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Project Details</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header />
        <Content />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

ProjectDetails.getLayout = page => <Layout>{page}</Layout>

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default ProjectDetails;