
import Pay2 from '../assets/pay2.png'
import Pay1 from '../assets/pay1.png'
import Pay4 from '../assets/pay4.png'
import Pay3 from '../assets/pay3.png'
import Pay5 from '../assets/pay5.png'
import Pay6 from '../assets/pay6.png'


export default function Payment() {
    return (
        <div className="bg-green-600">
         <div className="mx-[6rem] flex py-3 align-middle justify-between overflow-hidden">
            <img src={Pay1} alt="pay1" />
            <img src={Pay2} alt="pay2" />
            <img src={Pay4} alt="pay3" />
            <img src={Pay3} alt="pay4" />
            <img src={Pay5} alt="pay5" />
            <img src={Pay6} alt="pay6" />
         </div>
        </div>
    )
}