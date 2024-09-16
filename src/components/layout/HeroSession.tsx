"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

const HeroSession = () => {
    const images = [
        "https://i.ibb.co.com/CzJF9Sc/slider3.jpg",
        "https://i.ibb.co.com/3NWrP8b/slider4.jpg",
        "https://i.ibb.co.com/nrMF4Pb/slider5.jpg",
        "https://i.ibb.co.com/MPv36x0/slider6.jpg",
        "https://i.ibb.co.com/7nDDkDk/slider7.jpg",
        "https://i.ibb.co.com/YN7jWGh/slider1.png",
        "https://i.ibb.co.com/K7xkpxH/slider2.jpg",
        
      ];
    return (
        <ImagesSlider className="h-[90vh]"  images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Type Like a Pro <br />
         <small>Premium Mechanical Keyboards for Every Touch</small>

        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Shop now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
    );
};

export default HeroSession;