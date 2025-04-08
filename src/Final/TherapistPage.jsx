import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../components/Therapists/Card1';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

export default function TherapistPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-[#C7C2D9] to-[#E6E7ED]"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center py-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#122620] mb-4">
          Find Your Perfect Match
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
          Connect with experienced therapists who understand your journey
        </p>
      </motion.div>

      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper z-10"
      >
        <SwiperSlide data-hash="slide1">
          <Card />
        </SwiperSlide>
      </Swiper>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="text-center py-10 px-4"
      >
        <p className="text-lg text-gray-600 mb-6">
          Can't find what you're looking for? We're here to help!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#4FD1C5] text-[#122620] rounded-lg font-semibold hover:bg-[#3DA99F] transition-colors"
        >
          Contact Support
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
