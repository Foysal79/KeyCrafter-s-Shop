import { BiSupport } from "react-icons/bi";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const ServiceAdvertisement = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 px-8 md:px-10 py-10 rounded-lg bg-gray-200" >
            <div className=" gap-5 px-1 md:px-16 md:py-2  shadow-md rounded-lg" >
                
               <div className="flex items-center justify-center">
               <BiSupport className="  text-6xl   rounded-full p-3 bg-[#0A1429] text-white" />
               </div>
                
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold" >Support 24/7</h1>
                     <p className="text-sm text-center" >Delicated 24/7 Support</p>
                </div>
            </div>

            <div className=" gap-5 px-16 py-2  shadow-md rounded-lg" >
                
               <div className="flex items-center justify-center">
               <GiReturnArrow className="  text-6xl  border-2 rounded-full p-3 bg-[#0A1429] text-white" />
               </div>
                
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold" >Easy Return</h1>
                     <p className="text-sm text-center" >As website policy </p>
                </div>
            </div>
            <div className=" gap-5 px-16 py-2  shadow-md rounded-lg" >
                
               <div className="flex items-center justify-center">
               <BsFillCreditCard2FrontFill className="  text-6xl  border-2 rounded-xl p-3 bg-[#0A1429] text-white" />
               </div>
                
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold" >payment method</h1>
                     <p className="text-sm text-center" >Secure payment</p>
                </div>
            </div>
            <div className=" gap-5 px-16 py-2  shadow-md rounded-lg" >
                
               <div className="flex items-center justify-center">
               <TbTruckDelivery className="  text-6xl  border-2 rounded-full p-3 bg-[#0A1429] text-white" />
               </div>
                
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold" >Free Delivery</h1>
                     <p className="text-sm text-center" >from 50$</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default ServiceAdvertisement;