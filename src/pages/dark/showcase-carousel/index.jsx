<<<<<<< HEAD
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/showcases';
//= Components
import Loader from '@/components/Common/Loader';
import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import Carousel from '@/components/Showcases/Carousel';


function ShowcaseCarousel() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Carousel</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main>
        <Carousel />
      </main>
    </>
  )
}

ShowcaseCarousel.getLayout = page => <Layout>{page}</Layout>

=======
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/showcases';
//= Components
import Loader from '@/components/Common/Loader';
import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import Carousel from '@/components/Showcases/Carousel';


function ShowcaseCarousel() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Carousel</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main>
        <Carousel />
      </main>
    </>
  )
}

ShowcaseCarousel.getLayout = page => <Layout>{page}</Layout>

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default ShowcaseCarousel;