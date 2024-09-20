import React from "react";
import { Compare } from "../../ui/compare";

const KeyboardCompare = () => {
  return (
    <div className="mx-8 p-4 border rounded-3xl dark:bg-neutral-900
         bg-neutral-100  border-neutral-200 dark:border-neutral-800 lg:flex items-center ">
        <div className="py-3 px-6 flex-1">
        <h1 className="text-sm font-bold">Experience Durability, Customization, and Speed at Your Fingertips</h1>
        <h1 className=" pb-6 pt-2 text-3xl md:text-5xl font-bold  font-roboto">
        Why Use Mechanical <br /> Keyboard ?
        </h1>
        <p className="text-sm text-justify">In a world where efficiency and performance matter, mechanical keyboards have become the gold standard for both casual users and professionals. Unlike their membrane counterparts, mechanical keyboards offer a unique tactile feel, providing precise feedback with every keystroke. This not only improves typing accuracy but also enhances comfort during long sessions. With the added benefits of customization, durability, and ergonomic design, mechanical keyboards aren’t just a tool—they’re an experience. Whether you're gaming, coding, or simply typing, a mechanical keyboard brings a new level of control and satisfaction to your fingertips.</p>
      </div>
        <div
      className="flex-1"
    >
      <Compare
        firstImage="https://i.ibb.co.com/phk81MK/Keychsron-Before2.jpg"
        secondImage="https://i.ibb.co.com/dBvbMvF/Keychron-After2.jpg"
        firstImageClassName="object-cover "
        secondImageClassname="object-cover "
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
    </div>
  );
};

export default KeyboardCompare;
