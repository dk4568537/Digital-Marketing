import React from 'react';

const LifeAtSolution = () => {
  // Define an array of items
  const items = [
    {
      title: 'Life At Mobitising It Solution',
      description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      color: 'bg-red-500',
    },
    {
        title: 'Value',
        description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        color: 'bg-red-500',
      },
      {
        title: 'Perks & Benifits',
        description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        color: 'bg-red-500',
      },
  ];

  return (
    <div className='py-28 flex justify-center bg-[#001933]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-3 container py-5'>
        {items.map((item, index) => (
          <div key={index} className='w-40 h-32 md:w-40 md:h-40 relative bg-red-500 mb-12 md:mb-0'>
            <div className=' absolute w-64 md:w-[230px] lg:w-[245px] md:h-[200px] bg-white mt-3 ml-3 p-2 md:p-5'>
              <h1 className='font-sans font-bold md:text-lg py-1'>{item.title}</h1>
              <p className=' text-xs md:text-sx'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeAtSolution;
