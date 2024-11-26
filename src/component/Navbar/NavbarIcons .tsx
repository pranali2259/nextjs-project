import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 import {signIn,signOut} from 'next-auth/react'
import { useRouter } from 'next/router';

const NavbarIcons = () => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
const [isLoggedIn,setisLoggedIn]=useState(false);
  

  
  const handleProfileClick = () => {
    setIsProfileOpen((prev) => !prev);
  };

  
  const handleProfileNavigation = () => {
    setIsProfileOpen(false);   
    router.push('/profile');
   
  };

 
  const handleLogout = () => {
    setIsProfileOpen(false);   
 router.push('/api/auth/signout');
 signOut({ callbackUrl: '/' });
 setisLoggedIn(false);
  };
  const handleLogin = () => {
    setIsProfileOpen(false);
    signIn(); 
    setisLoggedIn(true); 
  };


  return (
    <div className="relative ">
      <div onClick={handleProfileClick} className="cursor-pointer  text-white">
        <AccountCircleIcon />

  
        {isProfileOpen && (
          <div className="absolute top-12 left-15 mt-5  right-0 w-48 bg-white shadow-lg rounded-md border border-gray-200 text-sm transition-all">
           
            {isLoggedIn ? (
              <>
               
                <div
                  onClick={handleProfileNavigation}
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
                >
                  Profile
                </div>

              
                <div
                  onClick={handleLogout}
                  className="block py-2 px-4  text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
                >
                  Logout
                </div>
              </>
            ) : (
            <div
            onClick={handleLogin}
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">  Login</div>
            
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarIcons;
