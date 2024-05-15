<<<<<<< HEAD
import React from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import ParallaxSlider from '@/components/Showcases/ParallaxSlider';


function ShowcaseParallaxSlider() {
  return (
    <>
      <Head>
        <title>Geekfolio - Parallax Slider</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main>
        <ParallaxSlider />
      </main>
    </>
  )
}

ShowcaseParallaxSlider.getLayout = page => <Layout>{page}</Layout>

=======
import React from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import ParallaxSlider from '@/components/Showcases/ParallaxSlider';


function ShowcaseParallaxSlider() {
  return (
    <>
      <Head>
        <title>Geekfolio - Parallax Slider</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main>
        <ParallaxSlider />
      </main>
    </>
  )
}

ShowcaseParallaxSlider.getLayout = page => <Layout>{page}</Layout>

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default ShowcaseParallaxSlider;