import Mainlogo from '../assets/mainlogo.png'
import Appstore from '../assets/applestore.png'
import Googlestore from '../assets/googlestore.png'
import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'
import Mob1 from '../assets/mob1.png'
import Mob2 from '../assets/mob2.png'
import Arrow from '../assets/arrow-right.png'

export default function Footer() {
    return (
        <div className='bg-white'>
<div className="bg-custom-image bg-custom-lightgray bg-custom-position bg-custom-size bg-no-repeat h-[400px] flex items-center justify-center text-white mx-[6rem] my-[10rem] rounded-md">
  <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-4">
    {/* Text Section */}
    <div className="text-center md:text-left max-w-lg space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold">ARE YOU READY TO START?</h1>
      
      <p className="text-lg leading-relaxed">
        Personalize your settings, follow your progress, and archive your highlights and notes automatically. Glose is the ultimate reading platform.
      </p>
      
      <div className="relative inline-block mt-4">
        {/* Button */}
        <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-3xl flex items-center space-x-2 relative z-10">
          Get Started

          {/* Arrow Image with White Background */}
          <div className="bg-white rounded-full p-2 absolute right-[-1rem] top-1/2 transform -translate-y-1/2">
            <img 
              src={Arrow} 
              alt="arrow icon" 
              className="w-4 h-4" 
            />
          </div>
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className="relative flex items-center md:ml-8">
      <img src={Mob1} alt="mob1" className="relative w-[150px] md:w-[200px] lg:w-[250px]" />
      <img src={Mob2} alt="mob2" className="absolute top-[3rem] left-[-2rem] w-[100px] md:w-[150px] lg:h-[21rem] lg:w-[200px]" />
    </div>
  </div>
</div>



        <div className=" py-8">
  

  <div className="flex flex-col items-center space-y-6">
    {/* Main Logo */}
    <img src={Mainlogo} alt="logo" className="mb-2" />

    {/* App Store Links */}
    <div className="flex space-x-4 mb-4">
      <img src={Appstore} alt="app store" />
      <img src={Googlestore} alt="google store" />
    </div>

    {/* Navigation Links */}
    <div className="flex flex-wrap justify-center space-x-4 mb-4 text-grey-300">
      <p>Personal Loan</p>
      <p>One Card</p>
      <p>Savings</p>
      <p>Checking</p>
      <p>Help</p>
      <p>Support</p>
    </div>

    {/* Social Media Icons */}
    <div className="flex space-x-4 mb-4">
      <p className="bg-green-400 rounded-full p-2">
        <img src={Twitter} alt="twitter" className="w-4 h-4" />
      </p>
      <p className="bg-green-400 rounded-full p-2">
        <img src={Facebook} alt="facebook" className="w-4 h-4" />
      </p>
      <p className="bg-green-400 rounded-full p-2">
        <img src={Instagram} alt="instagram" className="w-4 h-4" />
      </p>
      <p className="bg-green-400 rounded-full p-2">
        <img src={Linkedin} alt="linkedin" className="w-4 h-4" />
      </p>
    </div>

    {/* Feedback */}
    <p className="font-bold text-center mb-4">
      Send Your Feedback: <span className='font-normal'>mac.edargpu@tcatnoc</span>
    </p>

    {/* Policies and Conditions */}
    <div className="flex flex-wrap justify-center space-x-2 text-sm mb-4 text-grey-400">
      <p>Privacy Policy</p>
      <span>|</span>
      <p>Terms & Condition</p>
      <span>|</span>
      <p>Cookie Notice</p>
      <span>|</span>
      <p>Copyright Policy</p>
      <span>|</span>
      <p>Data Policy</p>
    </div>

    {/* Copyright */}
    <p className="text-sm text-center text-grey-400">&copy; 2024 Design Monks. All rights reserved.</p>
  </div>
</div>

        </div>
    )
}