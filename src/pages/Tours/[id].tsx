import React from 'react'
import Link from 'next/link';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
interface Tour {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  img: string;
  img1: string;
}

 
interface TourProps {
  tours: Tour[];
}
interface TourPageWithLayout extends React.FC<TourProps> {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
}
const TourDetail:TourPageWithLayout = ({tours}) => {
  return (
    <div className="bg-gray-100">
    {tours.map((tour) => {
      return (
        <div key={tour.id} className=" mx-auto bg-white  rounded-lg overflow-hidden  ">
          
          
          <div className="relative">
            <img
              src={tour.img}
              alt={tour.title}
              className="w-full h-96  object-cover"
            />
          
            <div className="absolute inset-0  bg-opacity-50 flex items-end  justify-normal p-10">
            <Link href='/Tours/Tour' className='font-bold text-blue-500  text-5xl'>
        <KeyboardArrowLeftIcon /> 
      </Link>
              <h1 className="text-3xl text-white font-bold">{tour.title}</h1>
            </div>
          </div>
  
           
          <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0">
          
            <div className="md:w-1/3">
              <h2 className="text-5xl mt-20 font-semibold text-gray-800">{tour.subTitle}</h2>
            </div>
  
           
            <div className="md:w-2/3 mt-3 text-xl text-gray-700  ">
              <p>{tour.description}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  
  
  )
}

TourDetail.getLayout = function pageLayout(page: React.ReactNode) {
  return (
    <>
      {page}
    </>
  );
};
export default TourDetail
export async function  getServerSideProps({ params }: { params: { id: string } })
 {
  const {id}=params;
  const res = await fetch(`http://localhost:5000/Tours?id=${id}`);
    const data:Tour = await res.json();
    return{
      props:{
        tours:data
      }
    }

}