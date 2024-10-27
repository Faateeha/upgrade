import Navbar from './Navbar';
import Hero1 from '../assets/hero.png';


export default function Hero() {
    return (
        <div className="bg-custom-image bg-custom-lightgray bg-custom-position bg-custom-size bg-no-repeat h-[600px] lg:h-[720px] px-8 overflow-hidden">
            {/* Navbar */}
            <Navbar />

            <div className=" flex justify-end mt-6 mr-[6rem]">
                <img src={Hero1} alt="" />
                
            </div>
        </div>
    );
}

