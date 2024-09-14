import React, { FC } from 'react';

interface SupplierPerformanceProps {
  
}

const SupplierPerformance: FC<SupplierPerformanceProps> = ({ }) => {
  return (
    <div className='flex flex-col flex-1 p-5 px-8 bg-white rounded-lg border shadow-lg mx-3'>
      <div className='flex flex-row pb-6 justify-between items-center py-auto'>
        <p className='my-auto'>Supplier Performance</p>
        <div className='my-auto'>
        <svg data-id="102" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-muted-foreground"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>      </div>
      </div>
      <div className='py-6'>
      <p className='font-bold text-xl'>$245,678.90</p>
      <p className='text-gray-400'>+5.2% from last month</p>
      </div>
    </div>  
    );
};

export default SupplierPerformance;