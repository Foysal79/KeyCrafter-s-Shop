import FeaturedProducts from "../components/layout/FeaturedProducts";
import HeroSession from "../components/layout/Herosession";
import ServiceAdvertisement from "../components/layout/ServiceAdvertisement";

const Home = () => {
    return (
        <div className="bg-[#E5E7EB]" >
            <HeroSession />
            <ServiceAdvertisement />
            <FeaturedProducts />
        </div>
    );
};

export default Home;