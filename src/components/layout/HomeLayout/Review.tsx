import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from '../../ui/ReviewCard';
const Review = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="px-8 md:px-10  py-10" >
        {/* title session */}
      <div className="py-3">
        <h1 className="text-sm font-bold">What our customers are saying about us</h1>
        <h1 className=" pb-6 pt-2 text-3xl md:text-5xl font-bold  font-roboto">
        Customers Are Saying 
        </h1>
      </div>
      <Carousel responsive={responsive}  >
  <ReviewCard />
  <ReviewCard />
  <ReviewCard />
  <ReviewCard />
  
</Carousel>;
      
    </div>
  );
};

export default Review;
