import React from 'react'

import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { IconBrandGmail } from '@tabler/icons-react';
import Image from 'next/image';

const features = [
  {
    heading: "Fast Process",
    description:
      "Fast and smooth processing for all services, whether it's a PAN card, passport, Aadhaar update, or EPFO assistance.",
    img: "/hassle-free.png",
  },

  {
    heading: "Affordable Pricing",
    description:
      "We offer competitive pricing for all our services with no hidden charges, ensuring you get value for your money.",
    img: "/rupees.png",
  },

  {
    heading: "Happy Customers",
    description:
      "5-star ratings on Google Reviews, we pride ourselves on delivering top-notch service that meets your needs.",
    img: "/rate.png",
  },

  {
    heading: "Available Anytime",
    description:
      "Our services are accessible 24/7, allowing you to apply or check the status of your documents at your convenience",
    img: "/with-no-end.png",
  },
];

const AboutUs = () => {
  return (
    <motion.div
      // initial={{ opacity: 0.0, y: 40 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{
      //   delay: 0.3,
      //   duration: 0.8,
      //   ease: "easeInOut",
      // }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <Image
        src="/arun_banner.png"
        alt="ArunRajOnlineServices"
        width={500}
        height={500}
        className="rounded-3xl w-full  mt-10 md:mt-0 md:w-1/2   mx-auto shadow-2xl shadow-blue-500/20"
        priority
      />
      <div className="md:flex gap-4 md:flex-row mt-0 md:mt-2">
        <div className="fixed bottom-0 left-0 right-0 flex justify-between p-4 z-50 md:gap-4 md:relative md:bottom-auto md:p-0">
          <a
            href="tel:+919930728010"
            className="px-8 py-4 md:w-full w-fit max-w-[50%] h-12 rounded-full bg-indigo-700 font-bold flex justify-center items-center gap-4 text-white tracking-widest uppercase transform hover:scale-105 hover:bg-indigo-600 transition-colors duration-200 md:mt-5"
          >
            <PhoneCall size={20} />
            <span className="md:block hidden">Call Now</span>
          </a>

          <a
            href="https://wa.me/919930728010"
            className="px-8 py-4 md:w-full w-fit max-w-[50%] h-12 rounded-full bg-[#25D366] font-bold flex justify-center items-center gap-4 text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#25D366] transition-colors duration-200 md:mt-5"
          >
            <IconBrandWhatsapp size={25} />
            <span className="md:block hidden">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* New Feature Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-left mx-[2rem] mb-5">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start space-x-4 border rounded-xl border-black row-span-1  group/bento shadow-md transition
          duration-200 shadow-input dark:shadow-none p-4 dark:bg-black
          dark:border-white/[0.2] bg-white border-transparent
          space-y-4"
            >
              <Image
                src={feature.img}
                alt={feature.heading}
                width={90}
                height={90}
                className="w-20 mx-auto"
              />
              <div>
                <h4 className="text-xl font-semibold text-black text-center mb-2">
                  {feature.heading}
                </h4>
                <p className="text-black">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default AboutUs