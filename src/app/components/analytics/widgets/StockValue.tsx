import React, { FC } from 'react';

interface StockValueProps {

}

const StockValue: FC<StockValueProps> = ({ }) => {
  return (
    <div className='flex flex-col flex-1 p-5 px-8 bg-white rounded-lg border shadow-lg mx-3'>
      <div className='flex flex-row pb-6 justify-between items-center py-auto'>
      <p className=''>Stock Value</p>
        <div>
          <svg data-id="81" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="w-4 h-4 text-muted-foreground"><line x1="12" x2="12"
              y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        </div>
      </div>
      <div className='py-6'>
      <p className='font-bold text-xl'>$245,678.90</p>
      <p className='text-gray-400'>+5.2% from last month</p>
      </div>
    </div>  
  );
};

export default StockValue;