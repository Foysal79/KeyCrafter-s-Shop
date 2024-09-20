import FeaturedProducts from "../components/layout/HomeLayout/FeaturedProducts";
import HeroSession from "../components/layout/HomeLayout/HeroSession";
import KeyboardCompare from "../components/layout/HomeLayout/KeyboardCompare";
import Review from "../components/layout/HomeLayout/Review";

import ServiceAdvertisement from "../components/layout/HomeLayout/ServiceAdvertisement";
import TopFeatured from "../components/layout/HomeLayout/TopFeatured";

const Home = () => {
  return (
    <div className="bg-[#E5E7EB]">
      <HeroSession />
      <ServiceAdvertisement />
      <FeaturedProducts />
      <KeyboardCompare />
      <TopFeatured />
      <Review />
    </div>
  );
};

export default Home;
