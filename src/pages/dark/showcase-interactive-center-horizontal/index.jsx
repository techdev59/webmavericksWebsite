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
import InteractiveCenterHorizontal from '@/components/Showcases/InteractiveCenterHorizontal';


function ShowcaseInteractiveCenterHorizontal() {
  useEffect(() => {
    document.body.classList.add('main-bg', 'inter-center');
    return () => document.body.classList.remove('main-bg', 'inter-center');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Interactive Horizontal</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main>
        <InteractiveCenterHorizontal />
      </main>
    </>
  )
}

ShowcaseInteractiveCenterHorizontal.getLayout = page => <Layout>{page}</Layout>

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
import InteractiveCenterHorizontal from '@/components/Showcases/InteractiveCenterHorizontal';


function ShowcaseInteractiveCenterHorizontal() {
  useEffect(() => {
    document.body.classList.add('main-bg', 'inter-center');
    return () => document.body.classList.remove('main-bg', 'inter-center');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Interactive Horizontal</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main>
        <InteractiveCenterHorizontal />
      </main>
    </>
  )
}

ShowcaseInteractiveCenterHorizontal.getLayout = page => <Layout>{page}</Layout>

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default ShowcaseInteractiveCenterHorizontal;