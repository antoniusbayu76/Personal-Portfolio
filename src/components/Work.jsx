import React, { useState, useEffect } from 'react';
import safinah1 from '../assets/ballDetect.png';
import safinah2 from '../assets/safinah11.jpeg';
import safinah3 from '../assets/safinah2.JPG';
import alamasena1 from '../assets/targetAUV.png';
import alamasena2 from '../assets/auv.png';
import alamasena3 from '../assets/almasena11.jpg';
import Gconnect1 from '../assets/gconect1.png';
import Gconnect2 from '../assets/gconect2.png';
import Gconnect3 from '../assets/bakdes11.JPG';

const items = [
  {
    id: 1,
    title: 'Safinah One',
    description: 'As a programmer, I specialize in developing autonomous surface vessels navigation systems using computer vision and machine learning. I design algorithms that enhance navigation accuracy and safety by enabling real-time obstacle detection and avoidance, covering the entire development process from coding to field implementation.',
    imageUrl: [safinah1, safinah2, safinah3],
  },
  {
    id: 2,
    title: 'Almasena',
    description: 'As a captain, I lead the team and monitor progress, ensuring that our goals are met efficiently. In my role as a programmer, I develop comprehensive system algorithms that control Autonomous Underwater Vehicles (AUVs), ensuring precise operation and successful mission execution.',
    imageUrl: [alamasena1, alamasena2, alamasena3],
  },
  {
    id: 3,
    title: 'Gconnect',
    description: 'As a software programmer, I am responsible for designing and developing a monitoring dashboard for an early warning system in Sriharjo Village. My role involves creating a user-friendly interface that provides real-time data and alerts, ensuring efficient monitoring and quick response to potential hazards.',
    imageUrl: [Gconnect1, Gconnect2, Gconnect3],
  },
];

const ProjectItem = ({ title, description, imageUrl, reverse }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 10000);
    return () => clearInterval(interval);
  }, [imageUrl.length]);

  const handleNextImage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrl.length);
      setIsAnimating(false);
    }, 500); // Duration matches animation time
  };


  return (
    <div className={`flex flex-col md:w-[900px] md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center bg-[#575661]`}>
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-xl text-orange-500 font-bold mb-4 text-center">{title}</h2>
        <p className="text-white mb-4 text-center">{description}</p>
      </div>
      <div className="w-full md:w-1/2 z-0 overflow-hidden">
        <div
          className={`w-full h-auto transition-transform duration-1000 transform ${
            !isAnimating ? 'animate-slide-in' : 'animate-slide-out'
          }`}
        >
          <img
            src={imageUrl[currentImageIndex]}
            alt={`${title} image ${currentImageIndex + 1}`}
            className="w-full h-auto max-h-[400px] object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div name='work' className="bg-[#3e3d49] pb-8" >
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'>
        <p className='text-4xl text-white font-bold inline border-b-4 border-orange-500'>
          Here is My Recent Work
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <div className="p-8">
          {items.map((item, index) => (
            <ProjectItem
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;