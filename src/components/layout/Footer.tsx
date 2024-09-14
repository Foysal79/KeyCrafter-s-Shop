import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="py-12 px-20">
      {/* session */}
      
        
        {/* other 3 session */}
        <div className="block md:flex justify-between   gap-16">
          {/* sighup session, email sender session  */}
        <div className="flex-1 pt-4 space-y-3">
          <div className="flex items-center text-[#0A1429]">
            <h1 className="text-8xl font-extrabold">K</h1>
            <small className="text-xl font-semibold">eycrafter's </small>
          </div>
          <h1>Sign up for news stories and personal offers</h1>
          <input className="border-2 px-5 py-2 rounded-xl " placeholder="your Email @gmail.com" type="email" name="" id="" />
        </div>
          {/* usefully Pages  */}
          <div className="flex-1 space-y-1">
            <h1 className="font-bold">Useful Pages</h1>
            <p> <a href="">About Us</a> </p>
            <p><a href="">Contact Us</a></p>
            <p><a href="">Shipping & Returns</a></p>
            <p><a href="">Refund Policy</a></p>
            <p><a href="">Tutorials</a></p>
            <p><a href="">Terms of Service</a></p>
            <p><a href="">FAQ</a></p>
            <p><a href="">Updates</a></p>
          </div>
          {/* About */}
          <div className="flex-1 space-y-4">
            <h1 className="font-bold">About</h1>
            <p>
              We are an online store dedicated to mechanical keyboard
              enthusiasts. We stock components at reasonable prices and ensure
              they're always in stock.
            </p>
            <p><a className="underline font-semibold" href="">Click here</a> to view updates on all our latest projects.</p>
          </div>
          {/* Contact us */}
          <div className="flex-1 space-y-4">
            <h1 className="font-bold">Contact Us</h1>
            <p>
              Visit our Contact Page or email us directly at : <br />
              
              <a className="underline" href="mailto:help@keycraftes.com">help@keycraftes.com</a>
            </p>
          </div>
        </div>
      
      {/* social  Media all*/}
      <div className="flex gap-1 items-center " >
        <a  className="text-3xl"href="https://www.youtube.com/ "><FaYoutube  /></a>
        <a  className="text-2xl"href="/ "><FaFacebookSquare  /></a>
        <a  className="text-2xl"href="/ "><FaInstagramSquare  /></a>
        <a  className="text-2xl"href="/ "><FaXTwitter  /></a>
        <a  className="text-2xl"href="/ "><AiFillTikTok  /></a>
        <a  className="text-2xl"href="/ "><IoLogoDiscord  /></a>
      
      
      
      
      
      


      </div>
      {/* copy right and payments */}
      <div className="flex justify-between items-center">
        <p>
          &copy; 2024 Keycrafter's. All rights reserved.
        </p>
        <div className="space-y-2">
          <p>Payment Methods</p>
        <div className="flex gap-1">
          <img src="https://i.ibb.co.com/HNrhZN2/2.jpg" alt="" />
          <img src="https://i.ibb.co.com/VH3mpmW/3.jpg" alt="" />
          <img src="https://i.ibb.co.com/6W95PQH/4.jpg" alt="" />
          <img src="https://i.ibb.co.com/n0Jjh74/7.jpg" alt="" />
          <img src="https://i.ibb.co.com/GWqZHL5/8.jpg" alt="" />
          <img src="https://i.ibb.co.com/jLqK5qV/9.jpg" alt="" />
          <img src="https://i.ibb.co.com/sPpskkt/downlo1ad.jpg" alt="" />
          <img src="https://i.ibb.co.com/LnfcN1F/download.jpg" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
