import React, { FC } from 'react';
import StockValue from './widgets/StockValue';
import StockMovement from './widgets/StockMovement';
import BestSelling from './widgets/BestSelling';
import SupplierPerformance from './widgets/SupplierPerformance';

interface AnalyticsComponentProps {
  
}

const AnalyticsComponent: FC<AnalyticsComponentProps> = ({ }) => {
  return (
<div className="flex flex-wrap w-full mx-auto justify-between">
       <StockValue/>
       <StockMovement/>
       <BestSelling/>
       <SupplierPerformance/>
       </div>  );
};

export default AnalyticsComponent;