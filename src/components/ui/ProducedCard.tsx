import { Button, Rate } from "antd";


const ProducedCard = () => {
  return (
    <div className="card card-compact bg-base-100  shadow-md">
  <figure>
    <img
      src="https://i.ibb.co.com/7nDDkDk/slider7.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body space-y-2">

    <h2 className="text-xl font-semibold py-3">[GB] MTNU Modern Dolch 
      
      </h2>
      <div className="flex justify-between items-center" >
      <h2 className="flex font-semibold text-base" >From $ <p>10</p> </h2>
      <div className="badge bg-[#0A1429] text-white ml-2 ">Logitech</div>
      </div>
      


    <div className="flex justify-between" >
    <div>
    <Rate allowHalf defaultValue={2.5} />
    </div>
      <h2 className="flex " >Available : <p>20</p> </h2>
    </div>
    
    
    <Button >See More Details</Button>
    
  </div>
</div>
  );
};

export default ProducedCard;