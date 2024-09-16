import { Button } from "antd";
import ProducedCard from "../../ui/ProducedCard";
import { RightOutlined } from "@ant-design/icons";

const FeaturedProducts = () => {
  return (
    <div className=" px-8 md:px-10  py-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-sm font-bold">
            Our Latest In-Stocks & Pre-Orders
          </h1>
          <h1 className=" pb-6 pt-2 text-3xl md:text-5xl font-bold  font-roboto">
            New In Stock
          </h1>
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
              padding: "10px",
              color: "#0A1429",
              fontWeight: "bold",
            }}
          >
            {" "}
            See More ...
            <RightOutlined />{" "}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <ProducedCard />
        <ProducedCard />
        <ProducedCard />
        <ProducedCard />
        <ProducedCard />
        <ProducedCard />
        <ProducedCard />
        <ProducedCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
