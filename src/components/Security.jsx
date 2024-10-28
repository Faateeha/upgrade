import Phone from '../assets/securityphone.png';
import Image from '../assets/image19.png';
import Fire from '../assets/fire.png';
import Arrow from '../assets/arrow-right.png'

export default function Security() {
  return (
    <>
      <div className="bg-custom-image bg-custom-lightgray bg-custom-position bg-custom-size bg-no-repeat h-auto flex flex-col md:flex-row items-center px-4 md:px-8 py-8 overflow-hidden">
        
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center mb-6 md:mb-0">
        
          <img
            src={Phone}
            alt="phone"
            className="w-[12rem] md:w-[14rem] lg:w-[16rem] object-contain mb-4 md:mb-0"
          />
          
          <img
            src={Image}
            alt="stacked image"
            className="w-[6rem] md:w-[10rem] lg:w-[12rem] object-contain"
            style={{ marginTop: '-8rem', marginLeft: '8rem' }}
          />
        </div>
  
       
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4 px-4 md:px-0">
          
          <p className="text-xs font-bold flex items-center p-1 bg-green-800 rounded-xl mb-2 text-white">
            <img src={Fire} alt="fire" className="w-4 h-4 mr-1" /> TRUSTWORTHINESS
          </p>
  
          {/* Main Heading */}
          <h1 className="font-bold text-white text-xl md:text-2xl">
            WE VALUE YOUR TRUST AND SECURITY
          </h1>
  
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
