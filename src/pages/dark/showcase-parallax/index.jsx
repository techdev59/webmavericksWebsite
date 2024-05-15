<<<<<<< HEAD
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import VerticalParallax from '@/components/Showcases/VerticalParallax';
import Numbers from '@/components/Showcases/VerticalParallax/Numbers';
import Block from '@/components/Showcases/VerticalParallax/Block';
import Footer from '@/components/Showcases/VerticalParallax/Footer';


function ShowcaseVerticalParallax() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Vertical Parallax</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main className="main-bg">
        <VerticalParallax />
        <Numbers paddingTop />
        <Block />
      </main>
      <Footer />
    </>
  )
}

ShowcaseVerticalParallax.getLayout = page => <Layout>{page}</Layout>

=======
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import VerticalParallax from '@/components/Showcases/VerticalParallax';
import Numbers from '@/components/Showcases/VerticalParallax/Numbers';
import Block from '@/components/Showcases/VerticalParallax/Block';
import Footer from '@/components/Showcases/VerticalParallax/Footer';


function ShowcaseVerticalParallax() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Vertical Parallax</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main className="main-bg">
        <VerticalParallax />
        <Numbers paddingTop />
        <Block />
      </main>
      <Footer />
    </>
  )
}

ShowcaseVerticalParallax.getLayout = page => <Layout>{page}</Layout>

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default ShowcaseVerticalParallax;