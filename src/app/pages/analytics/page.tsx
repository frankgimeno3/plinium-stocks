import React, { FC } from 'react';
import StockValue from '../../components/analytics/widgets/StockValue';
import StockMovement from '../../components/analytics/widgets/StockMovement';
import BestSelling from '../../components/analytics/widgets/BestSelling';
import SupplierPerformance from '../../components/analytics/widgets/SupplierPerformance';
import Search from '@/app/components/Search';

interface AnalyticsProps {
  
}

const Analytics: FC<AnalyticsProps> = ({ }) => {
  return (

    <main className="flex min-h-screen flex-col   text-gray-700 py-12 p-12 w-full">
    <Search />
    <div className="flex flex-wrap w-full mx-auto justify-between">
       <StockValue/>
       <StockMovement/>
       <BestSelling/>
       <SupplierPerformance/>
       </div> 
  </main>

 );
};

export default Analytics;