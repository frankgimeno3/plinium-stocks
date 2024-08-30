import React, { FC } from 'react';

interface InventoryTableProps {}

const arrowSVG = <div className='mx-auto'>
            <svg data-id="165" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
            stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4"><polyline points="8 18 12 22 16 18"></polyline><polyline points="8 6 12 2 16 6">
                </polyline><line x1="12" x2="12" y1="2" y2="22"></line></svg>
</div>

// Datos de ejemplo para la tabla
const inventoryData = [
  { product: 'Product A', sku: 'SKU001', category: 'Category 1', stock: 10, value: 100, actions: arrowSVG },
  { product: 'Product B', sku: 'SKU002', category: 'Category 2', stock: 5, value: 50, actions: arrowSVG },
  { product: 'Product C', sku: 'SKU003', category: 'Category 3', stock: 20, value: 200, actions: arrowSVG },
];

const InventoryTable: FC<InventoryTableProps> = () => {
  return (
    <table className='px-2 mt-12'>
      <thead className='text-gray-300 text-left'>
        <tr className='border-b  pb-5'>  
          <th className='pb-3'>Product</th>
          <th className='pb-3'>SKU</th>
          <th className='pb-3'>Category</th>
          <th className='pb-3'>Stock</th>
          <th className='pb-3'>Value</th>
          <th className='pb-3'>Actions</th>
        </tr>
      </thead>
      <tbody className='text-left my-2'>
        {inventoryData.map((item, index) => (
          <tr key={index} className='border-b  '> 
            <td className='pb-5 '>{item.product}</td>
            <td className='pb-5'>{item.sku}</td>
            <td className='pb-5'>{item.category}</td>
            <td className='pb-5'>{item.stock}</td>
            <td className='pb-5'>{item.value}</td>
            <td className='pb-5 pl-5'>{item.actions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
