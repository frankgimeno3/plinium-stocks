import React, { FC } from 'react';

interface StockMovementProps {
  
}

const StockMovement: FC<StockMovementProps> = ({ }) => {
  return (
    <div className='flex flex-col flex-1 p-5 px-8 bg-white rounded-lg border shadow-lg mx-3'>
      <div className='flex flex-row pb-6 justify-between items-center py-auto'>
      <p className=''>Supplier Performance</p>
        <div>
        <svg data-id="88" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-muted-foreground"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>        </div>
      </div>
      <div className='py-6'>
      <p className='font-bold text-xl'>$245,678.90</p>
      <p className='text-gray-400'>+5.2% from last month</p>
      </div>
    </div>  
    );
};

export default StockMovement;