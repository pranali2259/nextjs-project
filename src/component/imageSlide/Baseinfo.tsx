import React from 'react'
import ImageSlide from '@/component/imageSlide/ImageSlide'
const Baseinfo = () => {
  return (
    <div className="h-85 p-10 overflow-hidden relative">
       <div className="text-center font-bold text-black text-2xl mb-8">
       Incredible India
    </div>
  
      <div className="  flex transition-all ease-in-out duration-1000">
      <div
            
            className={'w-full   flex xl:flex-row flex-col items-center justify-center gap-9 xl:gap-18'}
          >
        
            <div className="xl:w-1/2 w-full flex flex-col justify-center items-center p-4 text-center">
              <p className=" text-black p-2">Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation. India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country. </p>
              <p className=" text-black p-2"> The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists interest. Along with the best nature sightseeing tours, India offers an opportunity to visitors to have a little adventure of their own. The numerous spell-binding and less-trodden trails give trekking tour opportunities in South Asia unlike any other.</p>
              <p className=" text-black p-2"> India Tours offers a chance to explore its biodiversity in the countrys many national parks and wildlife reserves. An enthralling experience entails in the India wildlife tour packages that take tourists to the habitats of Royal Bengal Tigers, one-horned rhinos, and snow leopards amongst many rare, endangered, and unique species of flora and fauna.</p>
            </div>

           
            <div className="xl:w-1/2 w-full relative">
            <ImageSlide/>
            </div>
          </div>
   
      </div>
        </div>
   
  )
}

export default Baseinfo
