<<<<<<< HEAD
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Contact/Header';
import Form from '@/components/InnerPages/Contact/Form';
import Footer from '@/components/Freelancer/Footer';


function PageContact() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Contact Us</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header />
        <Form />
      </main>
      <Footer />
    </>
  )
}

PageContact.getLayout = page => <Layout>{page}</Layout>

=======
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Contact/Header';
import Form from '@/components/InnerPages/Contact/Form';
import Footer from '@/components/Freelancer/Footer';


function PageContact() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Contact Us</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header />
        <Form />
      </main>
      <Footer />
    </>
  )
}

PageContact.getLayout = page => <Layout>{page}</Layout>

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default PageContact;