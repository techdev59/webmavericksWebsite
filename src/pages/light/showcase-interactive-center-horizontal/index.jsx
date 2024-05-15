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


function ShowcaseInteractiveCenterHorizontalLight() {
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
      <Navigation alwaysDark />
      <Menu lightMode />
      <main>
        <InteractiveCenterHorizontal />
      </main>
    </>
  )
}

ShowcaseInteractiveCenterHorizontalLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default ShowcaseInteractiveCenterHorizontalLight;