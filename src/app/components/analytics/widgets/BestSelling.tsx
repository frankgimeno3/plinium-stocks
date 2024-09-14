import React, { FC } from 'react';

interface BestSellingProps {
  
}

const BestSelling: FC<BestSellingProps> = ({ }) => {
  return (
    <div className='flex flex-col flex-1 p-5 px-8 bg-white rounded-lg border shadow-lg mx-3'>
      <div className='flex flex-row pb-6 justify-between items-center py-auto'>
      <p className=''>Best selling</p>
        <div>
        <svg data-id="95" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-muted-foreground"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>        </div>
      </div>
      <div className='py-6'>
      <p className='font-bold text-xl'>$245,678.90</p>
      <p className='text-gray-400'>+5.2% from last month</p>
      </div>
    </div>    
    );
};

export default BestSelling;