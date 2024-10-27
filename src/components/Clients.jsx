import Fire from "../assets/fire.png";
import Arrow from '../assets/arrow-right.png'

export default function Clients () {

    const clients = [
        {
            icon: '../src/assets/quote.png',
            testimony: 'I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product',
            image: '../src/assets/client1.png',
            star: '../src/assests/staricon.png',
            name: 'Mike Torello',
            position: 'CEO of Initech'
        },
        {
            icon: '../src/assets/quote.png',
            testimony: 'We have successfully sold digital product and have happy with the results & look forward to using it again this.',
            image: '../src/assets/client2.png',
            star: '../src/assests/staricon.png',
            name: 'Richards Hawkins',
            position: 'Marketing Manager of Upnow'
        },
        {
            icon: '../src/assets/quote.png',
            testimony: 'Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible .',
            image: '../src/assets/client3.png',
            star: '../src/assests/staricon.png',
            name: 'Thomas Magnum',
            position: 'Barellon NSW'
        }
    ]
    return (
        <>
<div className="bg-gray-200 py-6 px-4 ">
  {/* Testimonial Label */}
  <div className="flex justify-center mb-2">
    <p className="text-xs font-bold px-2 py-1 bg-gray-100 flex items-center rounded-lg w-max">
      <img src={Fire} alt="fire" className="mr-1" />
      TESTIMONIAL
    </p>
    
  </div>

  {/* Heading */}
  <h1 className="text-center text-2xl font-bold mb-8">GET TO KNOW OUR CLIENTS</h1>

  {/* Client Testimonials Section */}
  <div className="flex flex-wrap justify-center gap-6 mx-auto md:w-3/4 lg:w-2/3">
    {clients.map((client, index) => (
      <div
        key={index}
        className={`p-4 rounded-lg shadow-lg flex flex-col items-center ${
          index === 1 ? 'bg-green-300' : 'bg-white'
        } w-full sm:w-[18rem] md:w-[20rem]`}
      >
        {/* Client Testimonial */}
        <img src={client.icon} alt="icon" className="w-8 h-8 mb-2" />
        <p className="text-center text-sm mb-4">{client.testimony}</p>
        <div className="flex mt-2">
          <img src={client.star} alt="star rating" className="w-16" />
        </div>
        
        {/* Client Image, Name, and Position */}
        <div className="flex items-center space-x-3">
          <img src={client.image} alt={`${client.name}'s photo`} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="text-sm font-semibold">{client.name}</h3>
            <p className="text-xs text-gray-600">{client.position}</p>
          </div>
        </div>

        {/* Star Rating */}
        
      </div>
    ))}
    <div className="relative inline-block mt-4 justify-center">
        {/* Button */}
        <button className="px-6 py-2 border border-0.5 border-green-500 bg-white  font-semibold rounded-3xl flex items-center space-x-2 relative z-10">
          View More

          {/* Arrow Image with White Background */}
          <div className="bg-green-500 rounded-full p-2 absolute right-[-1rem] top-1/2 transform -translate-y-1/2">
            <img 
              src={Arrow} 
              alt="arrow icon" 
              className="w-4 h-4" 
            />
          </div>
        </button>
      </div>
  </div>

  {/* View More Button */}
  
</div>

        </>
    )
}