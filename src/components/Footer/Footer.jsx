import React from 'react';
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className="bg-[#122620] text-white py-12 z-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center pb-8 border-b border-gray-700">
          <div className="flex items-center">
            <img src="/logo3.png" alt="Soul Space Logo" className='h-24 object-contain'/>
          </div>

          <div className="flex space-x-4 mt-6 sm:mt-0">
            <SocialIcon url="https://linkedin.com" bgColor="#ffffff" style={{ height: 35, width: 35 }} className="hover:scale-110 transition-transform duration-300" />
            <SocialIcon url="https://instagram.com/healwithsoulspace" bgColor="#ffffff" style={{ height: 35, width: 35 }} className="hover:scale-110 transition-transform duration-300" />
            <SocialIcon url="https://email.com/" bgColor="#ffffff" style={{ height: 35, width: 35 }} className="hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-[#4FD1C5] mb-4">Home</h3>
            <ul className="space-y-3">
              <li><a href="/about-us" className="hover:text-[#4FD1C5] transition-colors duration-300">About Us</a></li>
              <li><a href="/book" className="hover:text-[#4FD1C5] transition-colors duration-300">Find Support</a></li>
              <li><a href="/blogs" className="hover:text-[#4FD1C5] transition-colors duration-300">Blogs & Stories</a></li>
              <li><a href="/more" className="hover:text-[#4FD1C5] transition-colors duration-300">More</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#4FD1C5] mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="/who-needs-help" className="hover:text-[#4FD1C5] transition-colors duration-300">Who Needs Help?</a></li>
              <li><a href="/book-session" className="hover:text-[#4FD1C5] transition-colors duration-300">Book a Session</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#4FD1C5] mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="/dream-analyzer" className="hover:text-[#4FD1C5] transition-colors duration-300">Dream Analyzer</a></li>
              <li><a href="/audio-video-therapy" className="hover:text-[#4FD1C5] transition-colors duration-300">Audio & Video Therapy</a></li>
              <li><a href="/digital-detox" className="hover:text-[#4FD1C5] transition-colors duration-300">Digital Detox</a></li>
              <li><a href="/talk-with-ai" className="hover:text-[#4FD1C5] transition-colors duration-300">Youth Corner</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#4FD1C5] mb-4">Newsletter</h3>
            <div className="mt-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#4FD1C5] text-sm"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#4FD1C5] text-gray-900 rounded-md hover:bg-[#3DA99F] transition-colors duration-300 font-medium text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              
              <div className='mt-6'>
                <a href="/contact" className="hover:text-[#4FD1C5] transition-colors duration-300">Contact Us</a>
                <div className="mt-4 text-sm text-gray-400">
                  <p>Copyright © {new Date().getFullYear()} - Soul Space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;