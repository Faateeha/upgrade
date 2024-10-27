import Group from '../assets/dash.png';
import Services from '../assets/ser.png';
import Four from '../assets/two.png';
import Fire from '../assets/fire.png';
import Arrow from '../assets/arrow-right.png'
import Dash2 from '../assets/real.png'


export default function MainContent () {
    return (
        <div className='mx-[6rem]'>
            <p className="text-xs font-bold p-1 flex items-center justify-center bg-gray-100 rounded-lg mx-auto  w-max">
    <img src={Fire} alt="fire" className="w-4 h-4 mr-1" /> ABOUT US
  </p>
        <div className="mx-10 my-8 flex ">
            <div className="p-4">
                <img src={Group} alt="group" />
            </div>
            <div className="p-4">
                <h1 className='font-bold text-2xl lg:text-6xl mb-2 lg:space-x-10'>ALL YOUR MONEY<br/> NEEDS IN ONE APP</h1>
                <img src={Dash2} alt="dash2" />
            </div>
        </div>

        <div className="mx-4 my-8 flex flex-col md:flex-row space-y-6 md:space-y-0">
  {/* Left Side - Text Section */}
  <div className="w-full md:w-1/2 space-y-4">
    {/* Featured Tag */}
    <p className="text-xs font-bold flex items-center bg-gray-100 rounded-lg p-1 w-max">
      <img src={Fire} alt="fire" className="w-4 h-4 mr-1" /> FEATURED
    </p>

    {/* Heading */}
    <h1 className="text-lg md:text-xl font-semibold">ALL THE FEATURES IN ONE APP</h1>

    {/* Feature List */}
    <p className="text-sm">• <span>Get 3% cash back on Everyday Purchases, 2% On Everything Else4</span></p>
    <p className="text-sm">• <span>Extra Spending Power When You Have Rewards Checking Through Upgrade6</span></p>

    {/* Get Started Button */}
    <div className="mt-4">
      <button className="px-4 py-2 border border-green-500 bg-white font-semibold rounded-3xl flex items-center space-x-2 relative overflow-visible">
        Get Started
        {/* Arrow Icon */}
        <div className="bg-green-500 rounded-full p-2 absolute top-[-0.5rem] right-[-1rem]">
          <img src={Arrow} alt="arrow icon" className="w-4 h-4" />
        </div>
      </button>
    </div>
  </div>

  {/* Right Side - Image Section */}
  <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end mt-6 md:mt-0">
    <div className="bg-gray-200 p-8 rounded-xl flex space-x-4 md:space-x-6">
      {/* Full-Height Images with Responsive Adjustments */}
      <img src={Services} alt="services" className="h-32 md:h-48 lg:h-full" />
      <img src={Four} alt="24" className="h-32 md:h-48 lg:h-full " />
    </div>
  </div>
</div>




        </div>


    )
}