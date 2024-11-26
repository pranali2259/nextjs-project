import React, { useEffect } from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
interface Slide {
    id: number;
    title: string;
    description: string;
    img: string;
    url: string;
    bg: string;
  }
const slides: Slide[] = [
    {
      id: 1,
      title: 'North India',
      description: "From fertile terrains to barren deserts, North India is a region known for its great diversity and popular tourist places. It includes Rajasthan with its scorching temperatures, reaching extremes, and Kashmir with its hill stations and frozen lakes in the majestic Himalayas. It narrates the story of our fight for freedom through its monuments and memorials, and takes us on a journey through time with its food and architecture. North India is an ideal destination for those who travel for leisure, adventure, or to explore historical sites of the past. There is so much to discover on a North India tour. Jammu & Kashmir, Ladakh, Himachal Pradesh, Punjab, Chandigarh, Uttarakhand, Rajasthan, Haryana, Delhi, and Uttar Pradesh constitute the northern part of India. A blend of forts, havelis, and domed structures, North India speaks for itself with its rich heritage and cultural significance.The allure of the Himalayas and the enchanting beauty of North India make it a must-visit destination for travelers from all around the world.",
      img: "https://i.pinimg.com/originals/e9/3c/3a/e93c3a6887c45baf173325efdaec6f86.jpg",
      url: '/',
      bg: 'bg-gradient-to-r from-pink-50 to-blue-50',
    },
    {
      id: 2,
      title: 'South India',
      description: "Exploring South India is an enriching experience that allows you to delve into a melting pot of diverse cultures, ranging from colonial influences to the ancient heritage of India. This vibrant region not only aims to be a haven for popular tech hubs in the country but also captivates travelers with its plethora of top visiting places, including mesmerizing hill stations and picturesque beaches. The architecture in South India is a testimony to its rich history, boasting a beautiful blend of French, British, Islamic, and Dravidian styles that add to its unique charm. The Southern part of India comprises the states of Telangana, Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, Puducherry, and the Island territories of Andaman & Nicobar and Lakshadweep. Embarking on a South India tour allows you to explore the diverse landscapes, historical landmarks, and vibrant cultures of these states.From tranquil backwaters in Kerala to the majestic temples of Tamil Nadu, and from the bustling tech cities of Bangalore and Hyderabad to the serene beaches of Puducherry, this region offers a perfect tropical vacation for all kinds of travelers.",
      img: "https://vizagtourism.org.in/images/v2/headers/visakhapatnam-vizag-1-night-2-days-tour-packages-with-hotel-cab-itinerary-price.jpg",
      url: '/',
      bg: 'bg-gradient-to-r from-green-50 to-yellow-50',
    },
    {
      id: 3,
      title: 'East India',
      description: "The East & Northeast part of India tells a captivating story of its past with its rich and intricate architecture, along with its ancient caves. It is a land of diverse experiences, offering nature tourism with its abundance of wildlife, wildlife sanctuaries, and national parks. This region also serves as a celebration of multiple religions, housing some of the prominent pilgrimage sites of Buddhism, Jainism, and Hinduism. Moreover, cultural tourism thrives in this area, as the handicraft and the tribal culture distinguish this region and make it stand out from the rest. The vibrant festivals celebrated by various tribes add to the cultural richness of the East & Northeast part of India. If you're an avid traveler seeking unique experiences, consider embarking on a North East India tour, where you can explore the fascinating architecture, delve into the spiritual aspects, immerse yourself in the natural beauty, and witness the captivating tribal culture and festivities.",
      img: "https://live.staticflickr.com/1742/41768707494_160cddaeb2_h.jpg",
      url: '/',
      bg: 'bg-gradient-to-r from-teal-50 to-orange-50',
    },
    {
      id: 4,
      title: ' West India',
      description: "The Western part of India, known as the West India Region, is home to prominent wildlife sanctuaries and national parks. It serves as a testimony to the past with its historical sites and caves. The West also adorns a number of religious sites, such as temples and various churches constructed during the colonial period. The states and union territories of Gujarat, Maharashtra, Dadra and Nagar Haveli, Daman & Diu, and Goa make up this vibrant region of Western India, as seen on the India tourism map. With its architectural style influenced by its colonizers, the place has its story to tell, making it an intriguing destination for those visiting West India. The peaceful and beautiful beaches of these coastal territories also offer a variety of water sports for those who are up for it. Whether you are exploring the wildlife sanctuaries, diving into the history of ancient caves, or enjoying the serene beaches, West India has something special in store for every traveler.",
      img: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/04/25140735/Summer-Zodiac-Signs-1-2048x1351.jpg",
      url: '/',
      bg: 'bg-gradient-to-r from-blue-50 to-white-50',
    },
    {
      id: 5,
      title: 'central India',
      description: "The centralmost part of India consists of the states of Madhya Pradesh and Chhattisgarh, making it a significant hub for tourism in central India. Madhya Pradesh originally was a single state until the year 2000 when Chhattisgarh was carved out from it to form a separate state. Both states hold a treasure trove of amazing historical sites, temples, waterfalls, forests, and wildlife, making them ideal destinations for tourists looking for places to visit. Filled with various tribes, the folk art, and culture in this region are reminiscent of its rich heritage, offering visitors a glimpse into its diverse and vibrant traditions. Moreover, this region of the country holds some of the prominent wildlife sanctuaries of India, allowing travelers to immerse themselves in the natural beauty and wildlife diversity. Additionally, it is noteworthy for its important mineral mining sites, adding to the economic significance of the region. Whether you're an art and culture enthusiast, a nature lover, or an adventure seeker, central India has something special to offer for every traveler.",
      img: "https://149573583.v2.pressablecdn.com/wp-content/uploads/2016/09/cs-madhya-pradesh.jpg",
      url: '/',
      bg: 'bg-gradient-to-r from-orange-50 to-green-50',
    }
  ];

  const Slider = () => {
    const [activeImage, setActiveImage] = useState(0);
  
    const clickNext = () => {
      setActiveImage((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
  
    const clickPrev = () => {
      setActiveImage((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     clickNext();
    //   }, 5000);
    //   return () => clearTimeout(timer); // Cleanup timeout on unmount
    // }, [activeImage]);
  
    return (
      <div className='relative'>
        <div className="text-center font-bold text-black text-2xl mb-8">
        Parts of India
      </div>
      <div>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${
              index === activeImage
                ? ' w-full   object-cover transition-all duration-500 ease-in-out'
                : 'hidden'
            }`}
          >
            <div className="grid place-items-center grid-cols-2 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
              <div className="relative w-full flex   transition-transform ease-in-out duration-500  ">
                <div className="w-full h-96">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
                  />
                </div>
              </div>
  
              <div className="grid place-items-center text-center w-full relative rounded-tr-3xl rounded-br-3xl">
                <motion.div
                  initial={{ opacity: index === activeImage ? 0 : 0.5,
                    scale:index === activeImage ? 0.5 : 0.3
                  }}
                  animate={{ opacity: index === activeImage ? 1 : 0.5,
                    scale:index === activeImage ?1: 0.5
                  }}
                  transition={{ x:{duration: 1},duration:2 ,ease:'linear'}}
                >
                  <div className="p-5 text-2xl font-extrabold">{slide.title}</div>
                  <div className="leading-relaxed font-medium text-base tracking-wide p-2 italic">
                    {slide.description}
                  </div>
                </motion.div>
              </div>
  
              
            </div>
             
          </div>
        ))}
        </div>
         <div className="absolute   h-full  w-full flex justify-end text-center">
                <div
                  onClick={clickPrev}
                  className="cursor-pointer text-3xl font-bold text-white"
                >
                 <GoArrowLeft />

                </div>
                <div
                  onClick={clickNext}
                  className="cursor-pointer text-3xl font-bold text-white"
                >
                 <GoArrowRight />
                </div>
              </div>
      </div>
    );
  };
  
  export default Slider;