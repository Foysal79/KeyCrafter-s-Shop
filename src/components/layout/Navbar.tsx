import Marquee from "react-fast-marquee";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge } from "antd";
const Navbar = () => {
  return (
    <div>
      <div className="bg-[#0A1429] text-white" >
        <Marquee
          pauseOnHover={true}
          delay={2}
          loop={0}
          className="text-white  py-4 font-semibold gap-10"
        >
          <li className=" px-6   mr-5   ">
            CLICK HERE TO JOIN THE KFA DISCORD SERVER
          </li>
          <li className="px-6   mr-5   ">
            FREE SHIPPING ON IN-STOCK ORDERS ABOVE $70 WITHIN
          </li>
          <li className="px-6   mr-5   ">⏳ Flash Sale: 24 Hours Only!</li>
          <li className="px-6   mr-5   ">
            ⚡ Limited Edition Mechanical Keyboards!
          </li>
          <li className="px-6   mr-5   ">✨ Hot New Arrivals!</li>
        </Marquee>

        {/* Navbar session */}
        <div className="flex justify-around items-center py-3 px-5 md:px-10   ">
          {/* logo session */}
          <div>
            <div className="flex items-center">
              <h1 className="text-8xl font-extrabold" >K</h1>
              <small className="text-xl font-semibold">eycrafter's </small>
            </div>
            {/* <img
              className="bg-black h-16 "
              src="https://i.ibb.co.com/tmGNkmn/Screenshot-2024-09-12-123024.png"
              alt=""
            /> */}
          </div>
          {/* Link Session */}
          <div className="flex gap-10 ">
            <ul>Home</ul>
            <ul>Products</ul>
            <ul>Products</ul>
            <ul>Contact Us</ul>
            <ul>Dashboard</ul>
          </div>
          {/* Search bar, login, cart  */}
          <div className="flex justify-between gap-5 items-center ">
            <ul className="text-2xl">
              <SearchOutlined />
            </ul>
            <ul>
              <Badge count={0} showZero>
                <Avatar shape="square" icon={<ShoppingCartOutlined />} />
              </Badge>
            </ul>

            <ul>
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </ul>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Navbar;
