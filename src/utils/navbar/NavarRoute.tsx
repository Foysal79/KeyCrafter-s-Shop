

const NavarRoute = () => {
  return (
    <div className="navbar  bg-[#0A1429] text-white px-0 md:px-12">
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

      <div className="navbar-start hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
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

      {/* <div className="navbar-end lg:hidden flex-1 pr-5">
        <ul className="text-2xl">
          <SearchOutlined />
        </ul>
        <ul className="mr-6 ml-2">
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
      </div> */}
    </div>
  );
};

export default NavarRoute;
