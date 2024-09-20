import React, { useState } from "react";
import { Avatar, Flex, Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const ReviewCard = () => {
  const [value, setValue] = useState(3);

  return (
    <div> 
      <div  className="p-3 w-10/12 text-justify md:mb-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea cupiditate,
        pariatur doloremque officiis blanditiis numquam vel saepe enim
        recusandae ratione odio, molestias provident. Et dolorum dolorem natus
        minima. Facere, dolorem.
      </div>
      <div className=" md:flex items-center justify-between  space-y-2 md:space-y-0 p-3" >
        <div className="flex items-center gap-4">
            <div>
            <Avatar size="large" icon={<UserOutlined />} />
            </div>
            <div>
                <h1 className="font-semibold">Canadian Rockies</h1>
                <p className="text-sm" >Grek Ross, KodeForest</p>
            </div>
        </div>
        {/* rating session*/}
        <div className="md:pr-20 ">
          <Flex gap="middle" vertical>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span>{desc[value - 1]}</span> : null}
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
