import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';

const MyComponent = () => {
  return (
    <div className='App'>
      <Typewriter
        words={['Welcome To Our Shop Arts And Crafts Here You Will Find The Best Selling Product', 'Typewriter Effect in React']}
        loop={true}
        cursor
        cursorStyle='_'
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('https://assignemnt-10-server.vercel.app/all-arts')
      .then(res => res.json())
      .then(data => setUserData(data))
  }, []);

  return (
    <>
      <MyComponent />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {userData.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <img className='rounded-xl w-full h-full' src={item.imageURL} alt={item.item_name} />
              <div className='lg:-translate-y-96 -translate-y-44'>
                <h1 className='text-center text-orange-200 lg:text-4xl font-bold'>{item.item_name}</h1>
                <p className='text-center text-orange-100 mt-8 lg:text-2xl font-semibold'>{item.shortdescription}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
