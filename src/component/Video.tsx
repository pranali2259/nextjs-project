// import React, { useRef, useState } from 'react';

// const VideoSection = () => {
 
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const toggleVideo = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div className="  w-full ">
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         className="fixed top-0 left-0 w-full  h-50 object-cover"
//         muted
//         loop
//         playsInline
//       >
//         <source src="/production ID_4133023.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay Content */}
//       <div className="  top-0 left-0 w-full  flex flex-col justify-center items-center">
//         <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
//          DIVERSE INDIA
//         </h1>
//         <p className="text-white text-lg md:text-2xl mt-4 text-center">
//         What are you waiting for?
//         </p>
//       </div>

//       {/* Play/Pause Button */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
//         <button
//           onClick={toggleVideo}
//           className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-xl shadow-lg hover:bg-blue-700 transition-all"
//         >
//           {isPlaying ? 'Pause' : 'Play'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoSection;
import React from 'react';
 
const VideoSection = () => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full">
        <video
          className="w-full object-cover"
          muted
          loop
          playsInline
          autoPlay  
          style={{ height: 'auto', maxHeight: '100vh' }}
        >
          <source src="/production ID_4133023.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 md:bg-opacity-0 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          DIVERSE INDIA
        </h1>
        <p className="text-white text-lg md:text-2xl mt-4 text-center">
          What are you waiting for?
        </p>
      </div>
     
    </div>
  );
};

export default VideoSection;
