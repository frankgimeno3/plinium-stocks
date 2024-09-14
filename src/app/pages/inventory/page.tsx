import React, { FC } from 'react';
import StockValue from '../../components/analytics/widgets/StockValue';
import StockMovement from '../../components/analytics/widgets/StockMovement';
import BestSelling from '../../components/analytics/widgets/BestSelling';
import SupplierPerformance from '../../components/analytics/widgets/SupplierPerformance';
import SearchBar from '@/app/components/SearchBar';
import NavWebLogged from '@/app/components/NavWebLogged';
import AnalyticsComponent from '@/app/components/analytics/AnalyticsComponent';

interface InventoryProps {

}

const Inventory: FC<InventoryProps> = ({ }) => {
    return (


        <>
            <NavWebLogged currentPage="inventory" />


            <div className="bg-gray-100 w-full h-full">
                <main className="flex min-h-screen flex-col   text-gray-700 py-12 p-12 w-full">
                    <SearchBar />
                    <AnalyticsComponent />
                </main>
            </div>
        </>

    );
};

export default Inventory;