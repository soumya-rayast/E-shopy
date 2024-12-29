import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmark } from "react-icons/io5";

const trackList = [
  {
    title: "Free and Fast Delivery",
    description: "Free delivery for all orders over $10",
    icon: <TbTruckDelivery aria-label="Truck Delivery Icon" />
  },
  {
    title: "24/7 Customer Service",
    description: "Friendly 24/7 customer support",
    icon: <BiSupport aria-label="Customer Support Icon" />
  },
  {
    title: "Money Back Guarantee",
    description: "We return within 30 days",
    icon: <IoShieldCheckmark aria-label="Money Back Guarantee Icon" />
  },
];

const Track = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-10 mb-10 mt-10 px-1 '>
      {trackList.map((track, index) => (
        <article
          key={index}
          className='flex flex-col items-center space-y-2 text-center'
        >
          <div
            className='bg-gray-200 p-4 rounded-full text-black text-5xl transition-transform duration-200 hover:scale-110'
          >
            {track.icon}
          </div>
          <div className='flex flex-col'>
            <h1 className='text-lg font-semibold'>{track.title}</h1>
            <p className='text-gray-600'>{track.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Track;
