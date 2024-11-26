import * as React from 'react';
 
import Link from 'next/link';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

interface CartItem {
  id: number;
  title: string;
  discreption: string;
  img: string;
}

interface CartProps {
  carts: CartItem[];
}

interface CartPageWithLayout extends React.FC<CartProps> {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
}

const CartDetail: CartPageWithLayout = ({ carts }) => {
  return (
    <div className="py-8 mt-10" >
      <Link href='/Facts' className='font-bold text-blue-500'>
        <KeyboardArrowLeftIcon />Back
      </Link>
      {carts.map((cart)=> {
      return(
        <> 
      <div className="text-center font-bold text-black text-2xl mb-8" >
        {cart.title}
      </div>

      <div className="flex flex-col items-center">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={cart.img}
            alt={cart.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="p-4">
            <p className="text-gray-800 font-semibold text-lg mb-4">
              {cart.title}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {cart.discreption}
            </p>
         
          </div>
          
        </div>
          
     
      </div>
      </>
       );} )}
    </div>
  );
};

CartDetail.getLayout = function pageLayout(page: React.ReactNode) {
  return (
    <>
      {page}
    </>
  );
};

export default CartDetail;

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { id } = params;
  
  try {
    const response = await fetch(`http://localhost:5000/carts?id=${id}`);
   

    const data: CartItem = await response.json();

    return {
      props: {
        carts: data,
      },
    };
  } catch (error) {
    console.error('Error fetching cart data:', error);
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  try {
    const res = await fetch('http://localhost:5000/carts');
    const data = await res.json();

    
    const paths = data.map((item: { id: number }) => ({
      params: { id: item.id.toString() },  
    }));

    return {
      paths,            
      fallback: 'blocking',   
    };
  } catch (error) {
    console.error('Error fetching paths:', error);
    return { paths: [], fallback: 'blocking' };  
  }
}
