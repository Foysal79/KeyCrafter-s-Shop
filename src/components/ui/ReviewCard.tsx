import React, { useState } from "react";
import { Avatar, Flex, Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FaQuoteLeft } from "react-icons/fa";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const ReviewCard = () => {
  const [value, setValue] = useState(3);

  return (
    <div className="shadow-xl rounded-2xl mx-5 px-2 my-5"> 
      <div  className="w-10/12 mx-auto text-justify md:mb-6   "> <FaQuoteLeft  className="inline md:text-3xl " />
        <p>
        it was a fantastic experience! As someone who is passionate about mechanical keyboards, I was impressed by the wide selection of products they offer, catering to both beginners and enthusiasts alike.
            </p>
             
      </div>
      <div className=" md:flex items-center justify-between  space-y-2 md:space-y-0 w-10/12 mx-auto pb-10" >
        <div className="flex items-center gap-2">
            <div>
            <Avatar size="large" icon={<UserOutlined />} />
            </div>
            <div>
                <h1 className="font-semibold">Canadian Rockies</h1>
                <p className="text-sm" >Grek Ross, KodeForest</p>
            </div>
        </div>
        {/* rating session*/}
        <div className=" ">
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
