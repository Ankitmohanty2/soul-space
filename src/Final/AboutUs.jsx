import { style } from 'motion';
import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-start px-4 lg:px-10 py-8 lg:py-0">
        <div className='text-center lg:text-end lg:ml-52 w-full lg:w-auto'>
          <div className="text-6xl lg:text-8xl font-bold font-hanoble">ABOUT</div>
          <div className="mt-3 text-6xl lg:text-8xl font-light mb-8 font-Bspring">US</div>
        </div>
        <p className="text-base lg:text-lg text-center lg:text-left">
          Welcome to Soul Space! A revolutionary mental health platform designed to make wellness accessible to everyone. 
          Our platform offers a unique blend of AI-powered support, professional therapy services, and interactive tools 
          to help you on your mental health journey.
        </p>
        <br />
        <p className="text-base lg:text-lg text-center lg:text-left">
          Soul Space features Kira, your AI companion for 24/7 emotional support, affordable therapy sessions, 
          dream analysis, digital detox tools, and a safe space for sharing your thoughts. We believe mental health 
          support should be accessible, affordable, and available whenever you need it.
        </p>
        <br />
        <p className="text-base lg:text-lg text-center lg:text-left text-gray-600 italic">
          Made with ❤️ by Ankit
        </p>
      </div>

      <img src="/AboutUs/BLine.svg" alt="line" className='hidden lg:block mr-5' />

      <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-4 mt-8 lg:mt-0'>
        <div className='text-center max-w-md'>
          <h3 className="text-2xl font-bold mb-6">Our Features</h3>
          <div className="grid grid-cols-2 gap-4">
            <FeatureCard icon="🤖" title="AI Support" />
            <FeatureCard icon="👥" title="Therapy" />
            <FeatureCard icon="💭" title="Dream Analysis" />
            <FeatureCard icon="🧘" title="Digital Detox" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title }) => (
  <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <div className="text-3xl mb-2">{icon}</div>
    <div className="font-medium">{title}</div>
  </div>
);

export default AboutUs;