import Footer from '@/component/Footer/Footer';
import Baseinfo from '@/component/imageSlide/Baseinfo';
import Navebar from '@/component/Navbar/NaveBar';
import Slider from '@/component/Slider/Slider';
import Video from '@/component/Video';
import Carts from '@/pages/cart/cart'
import Tour1 from '@/pages/Tours/Tour1'
 
function App() {
  return (
    <div className="bg-blue-200   min-h-screen">
      <Navebar/>
      <Video/>
      <Carts/>
      <Slider/>
      <Tour1/>
      <Baseinfo/>
      <Footer/>
    
    </div>
  );
}

 App.getLayout = function pageLayout(page: React.ReactNode) {
  return (
    <>
      {page}
    </>
  );
};
export default App;
