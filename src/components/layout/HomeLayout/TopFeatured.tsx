import Marquee from "react-fast-marquee";

const TopFeatured = () => {
  return (
    <div className="px-8 md:px-10  py-10">
      <div className="py-3">
        <h1 className="text-sm font-bold">All The Must-Have Keyboards Baned</h1>
        <h1 className=" pb-6 pt-2 text-3xl md:text-5xl font-bold  font-roboto">
          Top Featured Brands
        </h1>
      </div>
      <Marquee >
        <div className="relative w-60 h-32 mx-10">
          <img
            src="https://i.ibb.co.com/MsqV4V7/1.png"
            className="w-full h-full  opacity-70 rounded-xl "
            alt="Image"
          />
          <div className="absolute inset-0   opacity-50 "></div>
        </div>

        <div className="relative w-44 h-32 mx-10">
          <img
            src="https://i.ibb.co.com/L86scbX/2.png"
            className="w-full h-full  opacity-70 rounded-xl "
            alt="Image"
          />
          <div className="absolute inset-0  opacity-50"></div>
        </div>

        <div className="relative w-56 h-32 mx-10">
          <img
            src="https://i.ibb.co.com/dWtGTSw/3.png"
            className="w-full h-full opacity-70 rounded-xl"
            alt="Image"
          />
          <div className="absolute inset-0  opacity-50"></div>
        </div>
        <div className="relative w-36 h-32 mx-10">
          <img
            src="https://i.ibb.co.com/0jPcp57/4.jpg"
            className="w-full h-full rounded-xl opacity-70"
            alt="Image"
          />
          <div className="absolute inset-0  opacity-50"></div>
        </div>
        <div className="relative w-44 h-32 mx-10">
          <img
            src="https://i.ibb.co.com/2ZhjTSg/5.png"
            className="w-full h-full rounded-xl opacity-70"
            alt="Image"
          />
          <div className="absolute inset-0  opacity-50"></div>
        </div>
        <div className="relative w-44 h-32 mx-10 ">
          <img
            src="https://i.ibb.co.com/1mw5StD/6.png"
            className="w-full h-full rounded-xl opacity-70"
            alt="Image"
          />
          <div className="absolute inset-0  opacity-50"></div>
        </div>
        
      </Marquee>
    </div>
  );
};

export default TopFeatured;
