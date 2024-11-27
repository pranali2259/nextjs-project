 
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
