
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = (
  <p style={{ paddingInlineStart: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
);

const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <h1 className=' font-bold' >when will my order be shipped ?</h1>,
      children: <p className='text-sm' >Every order will be shipped on the next business day! Delays can occur if we have special events like Black Friday!</p>,
    },
    {
      key: '2',
      label: <h1 className=' font-bold' >Can i add something to my order?</h1>,
      children: <p className='text-sm' >Yes. Please write us a message and we will add it to your order and send you an invoice. This is only possible if your order is not shipped.</p>,
    },
    {
      key: '3',
      label: <h1 className=' font-bold' >Is it possible to pick up my order ?</h1>,
      children: <p className='text-sm' >Yes. Please write us a message and we can arrange a timeslot and refund the shipping costs. Pick up is only possible in Aachen, Bangladesh.</p>,
    },
    {
      key: '4',
      label: <h1 className=' font-bold' >Can i order Group Buy / Pre-Order and In-Stock Items is the same Order?</h1>,
      children: <p className='text-sm' >No. This is not possible due to the shipping times of Group-Buy / Pre-Order Products.</p>,
    },
    {
      key: '5',
      label: <h1 className=' font-bold' >What is the status of the Group-Buy / Pre-order I Joined ?</h1>,
      children: <p className='text-sm' >You can view the current status of all Group-Buy / Pre-Order in our Project Update List.</p>,
    },
  ];


const FaqSession = () => {
    return (
        <div className='bg-[#F5F5F5]  lg:flex mx-8 px-4 py-5 rounded-2xl items-center space-y-5 '>
            <div className="py-3 flex-1">
        <h1 className="text-sm font-bold">What our customers are saying about us</h1>
        <h1 className=" pb-6 pt-2 text-3xl md:text-5xl font-bold  font-roboto">
        Keycrafter's® Help & FAQ
        </h1>
        <p>If you need further assistance feeld free to contact us <br /> via E-Mail or get Help on our Discord Server.</p>
      </div>
            <div className='flex-1'>
            <Collapse  className='' items={items} bordered={false}  />;
            </div>
        </div>
    );
};

export default FaqSession;