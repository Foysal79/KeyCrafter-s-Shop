import FeaturedProducts from "../components/layout/HomeLayout/FeaturedProducts";
import HeroSession from "../components/layout/HomeLayout/HeroSession";
import Review from "../components/layout/HomeLayout/Review";

import ServiceAdvertisement from "../components/layout/HomeLayout/ServiceAdvertisement";
import TopFeatured from "../components/layout/HomeLayout/TopFeatured";

const Home = () => {
  return (
    <div className="bg-[#E5E7EB]">
      <HeroSession />
      <ServiceAdvertisement />
      <FeaturedProducts />
      <TopFeatured />
      <Review />
    </div>
  );
};

export default Home;
