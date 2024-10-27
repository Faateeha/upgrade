import Phone from '../assets/securityphone.png';
import Image from '../assets/image19.png';
import Fire from '../assets/fire.png';
import Arrow from '../assets/arrow-right.png'

export default function Security() {
  return (
    <>
<div className="bg-custom-image bg-custom-lightgray bg-custom-position bg-custom-size bg-no-repeat h-[700px] flex items-center px-8 overflow-hidden">
  
  
  <div className=" pl-[6rem] relative w-1/2 flex justify-center md:justify-start">
    {/* First Image */}
    <img src={Phone} alt="phone" className="absolute top-[-12rem] w-[14rem] lg:w-[16rem] object-contain" />
    
    <img src={Image} alt="stacked image" className="absolute top-[6rem] left-[15rem] w-[6rem] lg:w-[14rem]  object-contain" />
  </div>

  
  <div className="w-full md:w-1/2 flex flex-col items-start md:items-start text-center md:text-left space-y-4 pr-[6rem]">
    
    <p className="text-xs font-bold flex items-center p-1 bg-green-800 rounded-xl mb-2 text-white	">
      <img src={Fire} alt="fire" className="w-4 h-4 mr-1" /> TRUSTWORTHINESS
    </p>
    
    {/* Main Heading */}
    <h1 className="font-bold text-white text-2xl">WE VALUE YOUR TRUST AND SECURITY</h1>
    
    {/* Description */}
    <p className="text-sm text-white">
      Our mission is to make finance more accessible, transparent, and secure for everyone. With cutting-edge security measures and an unwavering commitment to transparency.
    </p>
    
    {/* Get Started Button */}
    <div className="relative inline-block mt-4">
      <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-3xl flex items-center space-x-2 relative z-10">
        Get Started
        <div className="bg-white rounded-full p-2 absolute right-[-1rem] top-1/2 transform -translate-y-1/2">
          <img src={Arrow} alt="arrow icon" className="w-4 h-4" />
        </div>
      </button>
    </div>
  </div>
  
</div>




      
    </>
  );
}
