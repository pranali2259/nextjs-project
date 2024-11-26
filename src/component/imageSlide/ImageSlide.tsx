// import { useState, useEffect } from "react";

// const images = [
//   {
//     id: 1,
//     src: "https://royalskystudyabroad.com/wp-content/uploads/2023/05/India.jpg",
//     alt: "Image 1",
//   },
//   {
//     id: 2,
//     src: "https://wallpapercave.com/wp/wp2894071.jpg",
//     alt: "Image 2",
//   },
//   {
//     id: 3,
//     src: "https://wallpaperaccess.com/full/124979.jpg",
//     alt: "Image 3",
//   },
//   {
//     id: 4,
//     src: "https://wallpaperaccess.com/full/124943.jpg",
//     alt: "Image 4",
//   },
// ];

// const  ImageSlide = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

   
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(interval);  
//   }, []);

//   return (
//     <div className="relative w-full h-85 p-5 mb-9 overflow-hidden">
      
//       <div
//         className="flex transition-transform duration-1000 top-5"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image) => (
//           <div key={image.id} className="w-full  flex-shrink-0">
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full p-2 h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlide;
import { useState, useEffect } from "react";

const images = [
  {
    id: 1,
    src: "https://royalskystudyabroad.com/wp-content/uploads/2023/05/India.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://wallpapercave.com/wp/wp2894071.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://wallpaperaccess.com/full/124979.jpg",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://wallpaperaccess.com/full/124943.jpg",
    alt: "Image 4",
  },
];

const ImageSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(  (prev) => (prev === images.length - 1 ? 0 : prev + 1));
     
    }, 3000); 

    return () => clearInterval(interval);  
  }, []);
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-85 p-5 mb-9 overflow-hidden">
     
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full p-2 h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
