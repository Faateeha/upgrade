import Fire from "../assets/fire.png";
import Mockup from "../assets/mockup.png";
import Mobile from "../assets/mobile.png";
import World from "../assets/world.png";
import Homeicon from "../assets/homeicon.png";
import Home from "../assets/home.png";
import Dashboard from "../assets/dashboard.png";
import Settingsicon from "../assets/settingsicon.png";
import Dollar from "../assets/dollar.png";
import Expense from "../assets/expense.png";
import Arrow from '../assets/arrow-right.png'
import Add from '../assets/add.png'

export default function Financial() {
  return (
    <>
      <div className="  mb-12 mx-[6rem]">
      <div className="text-center mb-6">
  {/* Centered SERVICES Tag */}
  <p className="text-xs font-bold p-1 flex items-center justify-center bg-gray-100 rounded-lg mx-auto  w-max">
    <img src={Fire} alt="fire" className="w-4 h-4 mr-1" /> SERVICES
  </p>

  {/* Centered Heading */}
  <h1 className="font-bold text-xl mt-2">
    CAN HELP YOU ACHIEVE FINANCIAL SUCCESS
  </h1>
</div>

{/* Main Content */}
<div className="flex flex-col md:flex-row bg-gray-200 p-6 rounded-lg items-center justify-center">
  {/* Left Side - Stacked Images */}
  <div className="relative w-1/2 md:w-[45%] flex justify-center md:justify-start">
    {/* Mockup Image */}
    <img src={Mockup} alt="mockup" className="w-[8rem] md:w-[10rem] h-auto absolute" />
    {/* Mobile Image, positioned over Mockup */}
    <img src={Mobile} alt="mobile" className="w-[6rem] md:w-[8rem] h-auto relative top-12 left-12" />
  </div>

  {/* Right Side - Icon and Text */}
  <div className="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
    {/* World Icon */}
    <div className="bg-green-100 p-2 rounded-full mb-2">
      <img src={World} alt="world" className="w-5 h-5" />
    </div>
    {/* Text */}
    <h2 className="font-semibold text-lg">Transfers Across The Globe Are Free</h2>
  </div>
</div>
</div>

      <div className="flex flex-col md:flex-row gap-6 px-[6rem] ">
  {/* Card Section 1 */}
  <div className="bg-gray-200 p-6 rounded-lg flex-1">
    {/* Icon with rounded top */}
    <div className="bg-green-100 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
      <img src={Homeicon} alt="icon" className="w-6 h-6" />
    </div>

    {/* Title */}
    <h2 className="text-lg font-semibold mb-2">
      Create A Card That Is Unique And Customized
    </h2>
    {/* Description */}
    <p className="text-sm text-gray-700 leading-relaxed mb-4">
      We offer a comprehensive range of innovative financial services tailored to meet your needs. Our services include high-yield savings accounts.
    </p>

    {/* Image */}
    <img src={Home} alt="home" className="w-full h-auto rounded-lg" />
  </div>

  {/* Card Section 2 */}
  <div className="bg-blue-100 p-6 rounded-lg flex-1 relative">
    {/* Icon with rounded top */}
    <div className="bg-green-100 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
      <img src={Settingsicon} alt="icon" className="w-6 h-6" />
    </div>

    {/* Title */}
    <h2 className="text-lg font-semibold text-white mb-2">
      Personalized Insights And Financial Goals
    </h2>

    {/* Description */}
    <p className="text-sm text-white leading-relaxed mb-4">
      Savings accounts that offer competitive interest rates and flexible deposit options. Invest wisely with our personalized services, including high-yield savings.
    </p>

    {/* Dashboard Image with Overlay */}
    <div className="relative">
      <img src={Dashboard} alt="dashboard" className="w-full h-auto rounded-lg" />
      <div className="bg-white p-4 rounded-lg shadow-lg absolute top-[6rem] right-[1rem] w-40">
  <p className="font-semibold text-grey-600">Total Balance</p>
  <p className="text-lg font-bold">$9,647.00</p>
  {/* Add Icon and Text */}
  <div className="flex items-center text-sm mt-2 space-x-2">
    <span className="bg-green-500 rounded-full p-1 flex items-center justify-center">
      <img src={Add} alt="add icon" className="w-4 h-4" />
    </span>
    <span>Add Number</span>
  </div>
</div>

    </div>
  </div>
</div>


    <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 my-10 px-[6rem]">
        
  {/* Dedication Section */}
  <div className="bg-yellow-100 p-6 rounded-lg w-full  flex flex-col justify-between text-center md:text-left h-[200px]">
    <h1 className="text-2xl font-bold mb-2">
      100% <br /> Dedication
    </h1>
    <p className="text-sm">
      We offer a comprehensive range of innovative financial services tailored to meet your needs.
    </p>
  </div>

  {/* Hold Money Section */}
  <div className="bg-gray-200 p-6 rounded-lg w-full relative flex flex-col h-[200px]">
  {/* Icon and Text Section */}
  <div className="flex flex-col items-center md:items-start">
    {/* Dollar Icon */}
    <div className="bg-green-100 p-2 rounded-full w-10 h-10 flex items-center justify-center">
      <img src={Dollar} alt="dollar icon" className="w-5 h-5" />
    </div>

    {/* Text */}
    <p className="text-xl font-semibold mt-2 text-center md:text-left">
      Hold Money In <br/>30+ Currencies
    </p>
  </div>

  {/* Expense Image aligned to the right */}
  <div className="absolute top-0 right-0 mt-6 mr-6">
    <img src={Expense} alt="expense image" className="w-20 h-50" />
  </div>
</div>



  {/* Services Page Section */}
  <div className="bg-green-200 p-6 rounded-lg w-full flex flex-col justify-between text-center md:text-left h-[200px]">
    <h1 className="text-2xl font-bold text-center my-auto text-white">Visit Our Services Page</h1>
  </div>
</div>

{/* Centered View More Button */}
<div className="flex justify-center my-6">
  <button className="px-6 py-2 border border-0.5 border-green-500 bg-white font-semibold rounded-3xl flex items-center space-x-2 relative z-10">
    View More

    {/* Arrow Image with White Background */}
    <div className="bg-green-500 rounded-full p-2 absolute right-[-1rem] top-1/2 transform -translate-y-1/2">
      <img src={Arrow} alt="arrow icon" className="w-4 h-4" />
    </div>
  </button>
</div>

      
    </>
  );
}
