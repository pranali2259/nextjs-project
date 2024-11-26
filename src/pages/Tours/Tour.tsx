// import React  from "react";
 
// import TourData from '@/pages/Tours/Tours.json';  
// import Link from 'next/link';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// interface tourItem {
//   id: number;
//   title: string;
//   subTitle:string;
//   description: string;  
//   img: string;
//   img1:string
// }
// interface tourItem{
//   Tours:tourItem[]
// }
// const carts:React.FC<tourItem> = ({Tours}) => {
     
//   //const Tours: tourItem[] = TourData;
//   // const [tourData, setTourData] = React.useState< tourItem[]>([]);  

//   // React.useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await fetch("http://localhost:5000/carts");

         
//   //       if (!response.ok) {
//   //         throw new Error("Failed to fetch data");
//   //       }

         
//   //       const data: tourItem[] = await response.json();  
//   //       setTourData(data);  
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   return (
//     <div>
        
//     <div className="py-8">
//     <div className="text-center font-bold text-black text-2xl mb-8">
//     Top India Tourism
//     </div>
  
//     <div className="flex flex-wrap gap-8 justify-center">
//       {Tours.map((tourItem, index) => (
//         <div key={index} className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
//           <img
//             src={tourItem.img1}
//             alt="Blog Image"
//             className="w-full h-64 object-cover rounded-t-lg"
//           />
  
//           <div className="p-5">
//             <p className="text-gray-800 font-semibold text-lg mb-4">
//               <Link href={`/Tours/${tourItem.id}`}> {tourItem.title} </Link>
//             </p>
             
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
//   </div>
//   )
// };

// export default carts;
// export async function getServerSideProps(){
//   const responce = await fetch('http://localhost:5000/Tours');
//   const data = responce.json();
//   return{
//     props:{
//       Tours:data
//     }
//   }
// }\

import React from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 
interface Tour {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  img: string;
  img1: string;
}

 
interface TourProps {
  Tours: Tour[];
}

const Carts: React.FC<TourProps> = ({ Tours }) => {
  return (
    <div>
      <div className="py-8 mt-10">
        <div className="text-center font-bold text-black text-2xl mb-8">
          Top India Tourism
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {Tours.map((tourItem) => (
            <div key={tourItem.id} className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={tourItem.img1}
                alt={tourItem.title}   
                className="w-full h-64 object-cover rounded-t-lg"
              />

              <div className="p-5">
                <p className="text-gray-800 font-semibold text-lg mb-4">
                  <Link href={`/Tours/${tourItem.id}`}>{tourItem.title}</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carts;

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:5000/Tours");

    
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: Tour[] = await response.json();

    return {
      props: {
        Tours: data || [],  
      },
    };
  } catch (error) {
    console.error("Error fetching Tours:", error);
    return {
      props: {
        Tours: [],  
      },
    };
  }
}
