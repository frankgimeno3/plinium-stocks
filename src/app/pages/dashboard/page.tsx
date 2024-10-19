import AnalyticsComponent from '@/app/components/analytics/AnalyticsComponent';
import InventoryOverview from '@/app/components/Inventory/InventoryOverview';
import NavWebLogged from '@/app/components/NavWebLogged';
import SearchBar from '@/app/components/SearchBar';
import React, { FC } from 'react';

interface DashboardProps {

}

const Dashboard: FC<DashboardProps> = ({ }) => {
    return (
        <div className='flex flex-row'>
            <NavWebLogged currentPage="dashboard" />
            <main className="bg-gray-100 w-full h-full flex min-h-screen flex-col   text-gray-700 py-12 p-12 w-full">
                <SearchBar />
                <p className="p-5 text-2xl">Panel de control</p>
                <AnalyticsComponent />
                <InventoryOverview />
            </main>
        </div >
    );
};

export default Dashboard;