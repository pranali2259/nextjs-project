import React from 'react'
import Link from 'next/link'
import BaseMenu from '@/component/Navbar/BaseMenu'
import 'tailwindcss/tailwind.css';
 
import NavbarIcons from '@/component/Navbar/NavbarIcons '
import { usePathname } from 'next/navigation';
const navLinks=[
  {name:'Homepage',href:"/"},
  {name:'Facts',href:'/Facts'},
  {name:'Tours',href:'/Tours/Tour'},
  {name:'About',href:'/About'},
  {name:'Contact',href:'/contactus/ContactUs'},
];
const Navbar = () => {
  const pathname=usePathname();
  
  return (
    <div className="fixed top-0 left-0 w-full h-16 px-4     transition-all duration-300 bg-blue-400">
      <div className="h-full flex justify-between items-center">
        
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="grid place-items-center">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                Wanderers Pabulum
              </div>
            </div>
           
          </div>
        </Link>
        
 
      

        
        <div className="flex items-center gap-4">
          
          <div className="block lg:hidden">
            <BaseMenu />
          </div>

        
          <div className="hidden md:flex items-center justify-between gap-8 w-full">
            
            <div className="flex items-center gap-9 w-full">
              <div className="hidden lg:flex gap-4 text-white">
             {
              navLinks.map((link)=>{
                const isActive=pathname.startsWith(link.href)
              return(
                <> 
                <Link href={link.href} key={link.name}
                className={isActive?"font-bold mr-4":"text-white mr-4"}>{link.name}</Link>
                 
                 
                </>
              )
})
             }
                
              </div>

         
           
            </div>
        
          </div>
          <NavbarIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
