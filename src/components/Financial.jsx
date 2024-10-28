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
  
  <p className="text-xs font-bold p-1 flex items-center justify-center bg-gray-100 rounded-lg mx-auto  w-max">
    <img src={Fire} alt="fire" className="w-4 h-4 mr-1" /> SERVICES
  </p>

  
  <h1 className="font-bold text-xl lg:text-3xl mt-2">
    CAN HELP YOU ACHIEVE <br/>FINANCIAL SUCCESS
  </h1>
</div>

<div className="flex flex-col md:flex-row bg-gray-200 p-6 rounded-lg items-center justify-center">
  
  {/* Image Section */}
  <div className="relative w-full md:w-[45%] flex items-center justify-center mb-4 md:mb-0 h-[12rem] md:h-auto">
    <img src={Mockup} alt="mockup" className="w-[8rem] md:w-[14rem] h-auto absolute" />
    <img src={Mobile} alt="mobile" className="w-[5rem] md:w-[8rem] h-auto absolute top-6 left-14 md:relative md:top-0 md:left-[3.5rem]" />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
    <div className="bg-green-100 p-2 rounded-full mb-2">
      <img src={World} alt="world" className="w-5 h-5" />
    </div>
    
    <h2 className="font-bold text-lg lg:text-2xl">
      Transfers Across The<br/> Globe Are Free
    </h2>
  </div>
</div>

</div>

      <div className="flex flex-col md:flex-row gap-6 px-[6rem] mt-[-2.3rem]">
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
      <div className="bg-white p-4 rounded-lg shadow-lg absolute top-[0.5rem] right-[1rem] w-30 md:w-40">
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


    <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 my-5 px-[6rem]">
        
  {/* Dedication Section */}
  <div className="bg-yellow-100 p-6 rounded-lg w-full  flex flex-col justify-between text-center md:text-left h-[200px]">
    <h1 className=" text-sm md:text-xl font-bold ">
      100% <br /> Dedication
    </h1>
    <p className="text-sm">
      We offer a comprehensive range of innovative financial services tailored to meet your needs.
    </p>
  </div>

  <div className="bg-gray-200 p-6 rounded-lg w-full relative flex flex-col h-[200px]">
  <div className="flex flex-col items-center md:items-start">
    <div className="bg-green-100 p-2 rounded-full w-10 h-10 flex items-center justify-center">
      <img src={Dollar} alt="dollar icon" className="w-5 h-5" />
    </div>

    <p className="text-sm font-semibold mt-2 text-center ">
      Hold Money In <br/>30+ Currencies
    </p>
    <div className="absolute top-0 right-0 mt-6 ">
    <img src={Expense} alt="expense image" className="w-20 h-[11rem]" />
  </div>
  </div>


</div>



 
  <div className="bg-green-200 p-6 rounded-lg w-full flex flex-col justify-between text-center md:text-left h-[200px]">
    <h1 className="text-2xl font-bold text-center my-auto text-white">Visit Our Services Page</h1>
  </div>
</div>


<div className="flex justify-center ">
  <button className="px-6 py-2 border border-0.5 border-green-500 bg-white font-semibold rounded-3xl flex items-center space-x-2 relative z-10">
    View More

    <div className="bg-green-500 rounded-full p-2 absolute right-[-1rem] top-1/2 transform -translate-y-1/2">
      <img src={Arrow} alt="arrow icon" className="w-4 h-4" />
    </div>
  </button>
</div>

      
    </>
  );
}
