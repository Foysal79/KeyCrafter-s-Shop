import FeaturedProducts from "../components/layout/HomeLayout/FeaturedProducts";
import HeroSession from "../components/layout/HomeLayout/HeroSession";
import KeyboardCompare from "../components/layout/HomeLayout/KeyboardCompare";
import Review from "../components/layout/HomeLayout/Review";

import ServiceAdvertisement from "../components/layout/HomeLayout/ServiceAdvertisement";
import TopFeatured from "../components/layout/HomeLayout/TopFeatured";
import FaqSession from "./FaqSession";

const Home = () => {
  return (
    <div className="bg-[#E5E7EB] space-y-5">
      <HeroSession />
      <ServiceAdvertisement />
      <FeaturedProducts />
      <KeyboardCompare />
      <TopFeatured />
      <FaqSession />
      <Review />
      
    </div>
  );
};

export default Home;
