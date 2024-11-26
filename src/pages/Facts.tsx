import * as React from 'react';
 
import Link from 'next/link';
interface CartItem {
  id: number;
  title: string;
  discreption: string;  
  img: string;
}
interface CartProps{
  carts:CartItem[];
}
const Carts1:React.FC<CartProps> = ({carts}) => {
 

  return (
    <div className="py-8 mt-10">
    <div className="text-center font-bold text-black text-2xl mb-8">
    <Link href={'/Facts'}> Facts About India</Link> 
    </div>
  
    <div className="flex flex-wrap gap-8 justify-center">
      {carts?.map((cartItem, index) => (
        <div key={index} className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={cartItem.img}
            alt="Blog Image"
            className="w-full h-64 object-cover rounded-t-lg"
          />
  
          <div className="p-4">
            <p className="text-gray-800 font-semibold text-lg mb-4">
              {cartItem.title}
            </p>
            <div className="flex justify-between items-center mt-4">
            
            <Link href={`/cart/${cartItem.id}`}>Read More</Link>
               
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
};
export default Carts1
 

 
export async function getStaticProps() {
  const response = await fetch('http://localhost:5000/carts');
  const data = await response.json();
  return {
    props: {
      carts: data,  
    },
  };
}

 
