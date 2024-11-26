import React from 'react'
import Link from 'next/link'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const NotFound = () => {
  return (
    <div className="justify-center text-center top-5 mt-40">
      <h2>not found</h2>
      <p>sorry the page you are looking for does not exist..</p>
      <Link href='/' className='font-bold text-blue-500'> <KeyboardArrowLeftIcon/>Back</Link>
    </div>
  )
}

export default NotFound
