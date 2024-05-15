<<<<<<< HEAD
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Product from '@/components/Shop/Product';
import Footer from '@/components/Startup/Footer';

function ShopProduct() {
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

  return (
    <>
      <Head>
        <title>Geekfolio - Shop Product</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <Navbar mainBg noStatic />
        <div id="smooth-content">
          <main className="main-bg">
            <Product />
          </main>
          <Footer subBg />
        </div>
      </div>
    </>
  )
}

ShopProduct.getLayout = page => <Layout>{page}</Layout>

=======
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Product from '@/components/Shop/Product';
import Footer from '@/components/Startup/Footer';

function ShopProduct() {
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

  return (
    <>
      <Head>
        <title>Geekfolio - Shop Product</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <Navbar mainBg noStatic />
        <div id="smooth-content">
          <main className="main-bg">
            <Product />
          </main>
          <Footer subBg />
        </div>
      </div>
    </>
  )
}

ShopProduct.getLayout = page => <Layout>{page}</Layout>

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default ShopProduct;