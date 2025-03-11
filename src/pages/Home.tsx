import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CourseOverview from '../components/CourseOverview';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <CourseOverview />
    </main>
  );
};

export default Home;