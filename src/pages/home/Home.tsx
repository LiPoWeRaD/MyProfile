import React from 'react';
import Header from '../../components/header/header';
import About from '../../components/about/about';

import Services from '../../components/services/services';
import Skills from '../../components/skills/skills';
import CardProfile from '../../components/cardProfile/cardProfile';
import Сontact from '../../components/сontact/сontact';
// import logo from './logo.svg';
// import './App.css';

function Home() {
  return (
    <main className='md:py-40 bg-black'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-20'>
          <CardProfile />
        <div className='flex flex-col items-start justify-end  max-w-[720px]'>
          <section className='mb-[200px]'>
            <Header />
          </section>
          <section className='mb-40'>
            <About />
          </section>
          <section className='mb-[200px]'>
            <Services />
          </section>
          <section className='mb-[200px]'>
            <Skills />
          </section>
          <section className='flex flex-col w-full'>
            <Сontact />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
