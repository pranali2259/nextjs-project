
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import * as React from 'react';
import Link from 'next/link';
import Slider from "react-slick";

interface CartItem {
  id: number;
  title: string;
  description: string;   
  img: string;
}

const Carts = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
  };

  const [tourData, setTourData] = React.useState<CartItem[]>([]);

  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/Tours");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: CartItem[] = await response.json();
        setTourData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-5 ">
      <div className="text-center font-bold text-black text-2xl mb-8">
        <Link href="/Tours/Tour">Explore India</Link>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {tourData.map((tour, index) => (
            <div key={index} className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-gray-800 font-semibold text-lg mb-4">
                  <Link href={`/Tours/${tour.id}`}>
                    {tour.title} 
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carts;


