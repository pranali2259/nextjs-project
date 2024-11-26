import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const ProfileMenu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const router = useRouter();
 
  const isLoggedIn = false; 

 
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push('/');   
    } else {
      setIsProfileOpen(prev => !prev);  
    }
  };

 
  const handleLogout = () => {
    console.log('Logging out...');
    router.push('/login');   
  };

  return (
    <div className="relative">
      <Button 
        onClick={handleProfile} 
        aria-haspopup="true" 
        aria-expanded={isProfileOpen ? 'true' : 'false'}
      >
        <AccountCircleIcon />
      </Button>
 
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 w-40 bg-white text-sm shadow-lg">
          {isLoggedIn ? (
            <>
              <Link href="/profile">
                <a className="block py-1 px-2 text-gray-700 hover:bg-gray-200 rounded-md">Profile</a>
              </Link>
              <div 
                onClick={handleLogout} 
                className="mt-2 py-1 px-2 text-gray-700 cursor-pointer hover:bg-gray-200 rounded-md"
              >
                Logout
              </div>
            </>
          ) : (
            <Link href="/login">
              <a className="block py-1 px-2 text-gray-700 hover:bg-gray-200 rounded-md">Login</a>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
