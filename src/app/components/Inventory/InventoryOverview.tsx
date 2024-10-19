import React, { FC } from 'react';
import InventoryTable from './InventoryTable';

interface InventoryOverviewProps {

}

const InventoryOverview: FC<InventoryOverviewProps> = ({ }) => {
  return (
    <>
      <p className=' text-2xl p-5 mt-12'> Resumen de inventarios</p>
      <div className='flex flex-col flex-1 p-5 px-8 bg-white rounded-lg border shadow-lg mx-3 '>
        <p className='text-gray-400'> Manage your inventory and view stock levels.</p>
        <InventoryTable />

      </div>
    </>
  );
};

export default InventoryOverview;