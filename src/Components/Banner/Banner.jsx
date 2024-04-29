

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './banner.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  
  const [userData, setUserData] = useState([]);
  useEffect(() => {
      fetch('http://localhost:5500/allCarts')
      .then(res => res.json())
      .then(data => setUserData(data))
  }, [])

  return (
    <>
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
        {
            userData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div>
                        <img  className='rounded-xl w-full h-full' src={item.imageURL} alt={item.item_name} />
                        <div className='lg:-translate-y-96 -translate-y-44'>
                        <h1 className='text-center text-orange-200 lg:text-4xl font-bold'>{item.item_name}</h1>
                        <p className='text-center text-orange-100 mt-8 lg:text-2xl font-semibold'>{item.shortdescription}</p>
                        </div>
                        </div>
                    </SwiperSlide>
                ))
        }
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