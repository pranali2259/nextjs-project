import * as React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface CartItem {
  id: number;
  title: string;
  discreption: string;   
  img: string;
}

const Carts = () => { 
  const [cartData, setCartData] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/carts");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: CartItem[] = await response.json();
        setCartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-8">
      <div className="text-center font-bold text-black text-2xl mb-8">
        <Link href={'/Facts'}> Facts About India</Link>
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        {cartData.slice(0, 4).map((cartItem, index) => (
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
  );
};

export default Carts;
