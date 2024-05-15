import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Blog/Header';
import Classic from '@/components/InnerPages/Blog/Classic';
import Footer from '@/components/Startup/Footer';


function BlogClassic() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "OUR BLOG",
    title: "Latest News."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Blog Classic</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg">
        <Header data={metadata} />
        <Classic />
      </main>
      <Footer />
    </>
  )
}

BlogClassic.getLayout = page => <Layout>{page}</Layout>

export default BlogClassic;