import Navbar from "./Navbar";
import Hero1 from "../assets/hero.png";
import Arrow from '../assets/arrow-right.png'
import Fire from "../assets/fire.png";


export default function Hero() {
  return (
    <div className="bg-custom-image bg-custom-lightgray bg-custom-position bg-custom-size bg-no-repeat h-[800px] md:h-[650px] lg:h-[720px] px-8 overflow-hidden">
       <div className="bg-custom-image2 bg-custom-position bg-custom-size bg-no-repeat h-[800px] md:h-[650px] lg:h-[720px] px-8 overflow-hidden">
      
      <Navbar />
      <div className="flex mx-[6rem] mt-[6rem] justify-center">
        <div className=" md:text-left max-w-lg space-y-4  pl-6 text-white">
        <p className="text-xs font-bold p-1 flex text bg-green-800 rounded-lg  w-max ">
    <img src={Fire} alt="fire" className="w-4 h-4 mr-1 " /> 100% TRUSTED PLATFORM
  </p>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            FINANCE WITH SECURITY AND <span className='text-yellow-100'>FLEXIBILITY</span>
          </h1>

          <p className="md:text-lg text-sm leading-relaxed">
            No-Fee Checking Account With Cash Back Rewards. Enjoy Fee-Free Banking And Earn Cash Back On Your Everyday Purchases.
          </p>

          <div className="relative inline-block mt-4">
            {/* Button */}
            <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-3xl flex items-center space-x-2 relative z-10">
              Open Account
              {/* Arrow Image with White Background */}
              <div className="bg-white rounded-full p-2 absolute right-[-1rem] top-1/2 transform -translate-y-1/2">
                <img src={Arrow} alt="arrow icon" className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
        <div className="">
          <img src={Hero1} alt="" />
        </div>
      </div>
      </div>
      
    </div>
  );
}
