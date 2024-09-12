import Marquee from "react-fast-marquee";

const Navbar = () => {
  return (
    <div>
      <Marquee
  pauseOnHover={true}
  delay={2}
  loop={0}
  className="text-white bg-black py-4 font-semibold gap-10"
>
  <li className=" px-6   mr-5   ">
    CLICK HERE TO JOIN THE KFA DISCORD SERVER
  </li>
  <li className="px-6   mr-5   ">
    FREE SHIPPING ON IN-STOCK ORDERS ABOVE $70 WITHIN
  </li>
  <li className="px-6   mr-5   ">
    ⏳ Flash Sale: 24 Hours Only!
  </li>
  <li className="px-6   mr-5   ">
    ⚡ Limited Edition Mechanical Keyboards!
  </li>
  <li className="px-6   mr-5   ">
    ✨ Hot New Arrivals!
  </li>
</Marquee>

      //! Navbar session
      <div className="flex justify-between ">
        <div>logo</div>
        <div>link</div>
        <div>searcher, cart </div>
      </div>
    </div>
  );
};

export default Navbar;
