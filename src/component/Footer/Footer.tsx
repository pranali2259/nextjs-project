import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-6">
      <div className="container mx-auto px-6">
       
        <div className="flex justify-between mb-6">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-2">Explore India</h2>
            <p className="text-sm">Your gateway to the best tours in India</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/About">
              <h1 className="text-sm hover:text-gray-400">About Us</h1>
            </Link>
            <Link href="/contactus/ContactUs">
              <h1 className="text-sm hover:text-gray-400">Contact</h1>
            </Link>
          </div>
        </div>

  
        <div className="border-t border-gray-600 pt-10 mb-7 mt-6 text-center">
          <p className="text-sm text-white">
            &copy; 2024 Explore India. All Rights Reserved.
          </p>
           
          </div>
        </div>
 
    </footer>
  );
};

export default Footer;
