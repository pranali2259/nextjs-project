// // import React from 'react'
// // import Link from 'next/link'
// // import Menu from './Menu'
// // import 'tailwindcss/tailwind.css';
// // import Searchbar from './Searchbar'
// // import NavbarIcons from './NavbarIcons '

// // const Navebar = () => {
// //   return (
// //     <div className="fixed top-0 left-0 w-full h-16 px-4 bg-blue-600 shadow-md z-50 ">
// //     <div className="h-full flex justify-between items-center relative md-hidden">
// //       {/*left*/}
// //       <Link href="#home" className="flex items-center space-x-3">
// //         {/*logo*/}
// //         <div className="flex items-center space-x-2">
// //           <div className="grid place-items-center">
// //             <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black
// //             ">
// //               Wanderer's Pabulum
// //             </div>
// //           </div>
          
// //           <img src="" alt="Logo" className="w-8 h-8 object-cover" />
// //         </div>
// //       </Link>
// //     {/*right*/}
      
// //         <Menu />
// //       </div>
     
// //       <div className='hidden md:flex items-center justify-between gap-8 h-full'>
// //         <div className='w-1/3'>
// //         <Link href="#home" className="flex items-center space-x-3">
// //         {/*logo*/}
// //         <div className="flex items-center space-x-2">
// //           <div className="grid place-items-center">
// //             <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black
// //             ">
// //               Wanderer's Pabulum
// //             </div>
// //           </div>
          
// //           <img src="" alt="Logo" className="w-8 h-8 object-cover" />
// //         </div>
// //       </Link>
// //         </div>
// //         <div className='w-2/3 flex items-center justify-between gap-8'>
// // <Searchbar/>
// // <NavbarIcons/>
// //         </div>
// //       </div>
// //     </div>
   
  
// //   )
// // }

// // export default Navebar
// import React from 'react'
// import Link from 'next/link'
// import Menu from './Menu'
// import 'tailwindcss/tailwind.css';
// import Searchbar from './Searchbar'
// import NavbarIcons from './NavbarIcons '

// const Navbar = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-16 px-4 bg-blue-600 shadow-md z-50">
//       <div className="h-full flex justify-between items-center relative">
//         {/* Left Section - Logo */}
//         <Link href="#home" className="flex items-center space-x-3">
//           <div className="flex items-center space-x-2">
//             <div className="grid place-items-center">
//               <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black">
//                 Wanderer's Pabulum
//               </div>
//             </div>
//             <img src="" alt="Logo" className="w-8 h-8 object-cover" />
//           </div>
//         </Link>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Small screen: Only show Menu */}
//           <Searchbar />
//           <div className="block md:hidden">
//             <Menu />
//           </div>

//           {/* Large screen: Show Searchbar and NavbarIcons */}
//           <div className="hidden md:flex items-center justify-between gap-8">
//           <div className='w-1/3 xl:w-1/2'>
// <div className='hidden xl:flex gap-4'>
// <Link href='/'>Homepage</Link>
//           <Link href='/'>About</Link>
//           <Link href='/'>contact</Link>
//           <Link href='/'>Tours</Link>
// </div>
//           </div>
//             {/* On medium screens and larger, show Searchbar and NavbarIcons */}
//             <div className="flex items-center gap-8 xl:w-1/2 w-2/3">
              
//               <NavbarIcons />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar;

// import React from 'react'
// import Link from 'next/link'
// import BaseMenu from './BaseMenu'
// import 'tailwindcss/tailwind.css';
// import Searchbar from  '../component1/Searchbar'
// import NavbarIcons from './NavbarIcons '

// const Navbar = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-16 px-4 bg-blue-600 shadow-md z-50">
//       <div className="h-full flex justify-between items-center">
//         {/* Left Section - Logo */}
//         <Link href="#home" className="flex items-center space-x-3">
//           <div className="flex items-center space-x-2">
//             <div className="grid place-items-center">
//               <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black">
//                 Wanderer's Pabulum
//               </div>
//             </div>
//             <img src="" alt="Logo" className="w-8 h-8 object-cover" />
//           </div>
//         </Link>
//  {/* Searchbar */}
//  <Searchbar />
//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Mobile: Show Menu */}
        

//           {/* Large screens (md and up): Show Searchbar and NavbarIcons */}
//           <div className="hidden md:flex items-center justify-between gap-8 w-full">
//             {/* On medium screens and larger, show Searchbar and NavbarIcons */}
//             <div className="flex items-center gap-9 w-full">
//               <div className=" hidden xl:flex gap-4">
//                 {/* Optional additional links for extra-large screens */}
//                 <Link href="/">Homepage</Link>
//                 <Link href="/">About</Link>
//                 <Link href="/">Contact</Link>
//                 <Link href="/">Tours</Link>
//               </div>

              

//               {/* Navbar Icons */}
             
//             </div>
//           </div>
//           <div className="block lg:hidden">
//             <BaseMenu />
           
//           </div>
//           <NavbarIcons />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar;
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
    <div className="fixed top-0 left-0 w-full h-16 px-4  bg-none   z-10 transition-all duration-300 hover:bg-blue-400">
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
