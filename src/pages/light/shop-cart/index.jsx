<<<<<<< HEAD
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Shop/Header';
import Cart from '@/components/Shop/Cart';
import Footer from '@/components/Startup/Footer';

function ShopCartLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    // Smooth Scroll of Page
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true)
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "SHOPPING",
    title: "Cart."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Shop Cart</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <Navbar mainBg noStatic lightMode />
        <div id="smooth-content">
          <main className="main-bg">
            <Header data={metadata} />
            <Cart lightMode />
          </main>
          <Footer subBg lightMode />
        </div>
      </div>
    </>
  )
}

ShopCartLight.getLayout = page => <Layout lightMode>{page}</Layout>

=======
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Shop/Header';
import Cart from '@/components/Shop/Cart';
import Footer from '@/components/Startup/Footer';

function ShopCartLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    // Smooth Scroll of Page
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true)
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "SHOPPING",
    title: "Cart."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Shop Cart</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <Navbar mainBg noStatic lightMode />
        <div id="smooth-content">
          <main className="main-bg">
            <Header data={metadata} />
            <Cart lightMode />
          </main>
          <Footer subBg lightMode />
        </div>
      </div>
    </>
  )
}

ShopCartLight.getLayout = page => <Layout lightMode>{page}</Layout>

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default ShopCartLight;