import Marquee from "react-fast-marquee";
import {
  DownOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Dropdown, MenuProps, Space } from "antd";
const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'All New Arrivals',
  },
  {
    key: '2',
    label: 'new in-stack arrivals',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: 'disabled sub menu',
    children: [
      {
        key: '3-1',
        label: '5d menu item',
      },
      {
        key: '3-2',
        label: '6th menu item',
      },
    ],
  },
];

const Navbar = () => {
  return (
    <div className="bg-[#0A1429] text-white py-4">
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
      <div className="  flex justify-between items-center py-0 px-5 md:px-16   ">
        {/* logo session */}

        <div className=" navbar-center hidden lg:flex items-center">
          <h1 className="text-8xl font-extrabold">K</h1>
          <small className="text-base font-semibold">eycrafter's </small>
        </div>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#0A1429] text-white"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
            <li>
              <a>Item 4</a>
            </li>
            <li>
              <a>Item 5</a>
            </li>
            <li>
              <a>Item 6</a>
            </li>
          </ul>
        </div>

        <div className=" navbar-center lg:hidden  items-center flex">
          <h1 className="text-2xl font-extrabold">K</h1>
          <small className="text-sm font-semibold">eycrafter's </small>
        </div>

        {/* Link Session */}
        <div className=" hidden lg:flex mr-16">
          <ul className="menu menu-horizontal ">
            <li>
              <Dropdown  menu={{ items }}>
                <a  onClick={(e) => e.preventDefault()}>
                  <Space  >
                    New Arrivals
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown  menu={{ items }}>
                <a  onClick={(e) => e.preventDefault()}>
                  <Space  >
                    items 2
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown  menu={{ items }}>
                <a  onClick={(e) => e.preventDefault()}>
                  <Space  >
                    item 3
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown  menu={{ items }}>
                <a  onClick={(e) => e.preventDefault()}>
                  <Space  >
                    item 4
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <a>Item 5</a>
            </li>
            <li>
              <a>Item 6</a>
            </li>
          </ul>
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
  );
};

export default Navbar;
