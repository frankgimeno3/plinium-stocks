"use client"

import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

interface NavWebLoggedProps {
    currentPage: any;
}

const NavWebLogged: FC<NavWebLoggedProps> = ({ currentPage }) => {

    const [isDashboardSelected, setIsDashboardSelected] = useState(false);
    const [isInventorySelected, setIsInventorySelected] = useState(false);
    const [isProductsSelected, setIsProductsSelected] = useState(false);
    const [isProvidersSelected, setIsProvidersSelected] = useState(false);
    const [isTurnoverSelected, setIsTurnoverSelected] = useState(false);
    const [isPeopleHubSelected, setIsPeopleHubSelected] = useState(false);
    const [isAnalyticsSelected, setIsAnalyticsSelected] = useState(false);
    const [isSettingsSelected, setIsSettingsSelected] = useState(false);

    useEffect(() => {
        switch (currentPage) {
            case "dashboard":
                setIsDashboardSelected(true);
                setIsInventorySelected(false);
                setIsProductsSelected(false);
                setIsProvidersSelected(false);
                setIsTurnoverSelected(false);
                setIsPeopleHubSelected(false);
                setIsAnalyticsSelected(false);
                setIsSettingsSelected(false)
                break;
            case "inventory":
                setIsDashboardSelected(false);
                setIsInventorySelected(true);
                setIsProductsSelected(false);
                setIsProvidersSelected(false);
                setIsTurnoverSelected(false);
                setIsPeopleHubSelected(false);
                setIsAnalyticsSelected(false);
                setIsSettingsSelected(false)

                break;
            case "products":
                setIsDashboardSelected(false);
                setIsInventorySelected(false);
                setIsProductsSelected(true);
                setIsProvidersSelected(false);
                setIsTurnoverSelected(false);
                setIsPeopleHubSelected(false);
                setIsAnalyticsSelected(false);
                setIsSettingsSelected(false)

                break;
            case "providers":
                setIsDashboardSelected(false);
                setIsInventorySelected(false);
                setIsProductsSelected(false);
                setIsProvidersSelected(true);
                setIsTurnoverSelected(false);
                setIsPeopleHubSelected(false);
                setIsAnalyticsSelected(false);
                setIsSettingsSelected(false)

                break;
            case "turnover":
                setIsDashboardSelected(false);
                setIsInventorySelected(false);
                setIsProductsSelected(false);
                setIsProvidersSelected(false);
                setIsTurnoverSelected(true);
                setIsPeopleHubSelected(false);
                setIsAnalyticsSelected(false);
                setIsSettingsSelected(false)

                break;
            case "peoplehub":
                setIsDashboardSelected(false);
                setIsInventorySelected(false);
                setIsProductsSelected(false);
                setIsProvidersSelected(false);
                setIsTurnoverSelected(false);
                setIsPeopleHubSelected(true);
                setIsAnalyticsSelected(false);
                setIsSettingsSelected(false)

                break;
            case "analytics":
                setIsDashboardSelected(false);
                setIsInventorySelected(false);
                setIsProductsSelected(false);
                setIsProvidersSelected(false);
                setIsTurnoverSelected(false);
                setIsPeopleHubSelected(false);
                setIsAnalyticsSelected(true);
                setIsSettingsSelected(false)

                break;
            case "settings":
                setIsDashboardSelected(false);
                setIsInventorySelected(false);
                setIsProductsSelected(false);
                setIsProvidersSelected(false);
                setIsTurnoverSelected(false);
                setIsPeopleHubSelected(false);
                setIsAnalyticsSelected(false);
                setIsSettingsSelected(true)

                break;
            default:
                setIsDashboardSelected(false);
                setIsInventorySelected(false);
                setIsProductsSelected(false);
                setIsProvidersSelected(false);
                setIsTurnoverSelected(false);
                setIsPeopleHubSelected(false);
                setIsAnalyticsSelected(false);
                setIsSettingsSelected(false)

        }
    }, [currentPage]);

    return (
        <div className="flex flex-col justify-between bg-white h-screen border border-gray-300 shadow w-24">
            <div className="flex flex-col my-1 mx-auto h-full pt-12">
                <Link className={` ${isDashboardSelected ? "bg-gray-400 rounded-lg shadow-sm mx-3 w-12 my-3" : "mx-3 w-12 my-3"}`} href={"/"} >
                    <div className="flex flex-row justify-center mx-3 my-3 " >
                        <svg data-id="13" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDashboardSelected ? "white" : "gray"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 transition-all group-hover:scale-110">
                            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                            <path d="M12 3v6"></path>
                        </svg>
                    </div>
                </Link>

                <Link className={` ${isInventorySelected ? "bg-gray-400 rounded-lg shadow-sm mx-3 w-12 my-3" : "mx-3 w-12 my-3"}`} href={"/pages/inventory"} >
                    <div className="flex flex-row justify-center mx-3 my-3 " >
                        <svg data-id="3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isInventorySelected ? "white" : "gray"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
                            <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path>
                            <path d="M6 18h12"></path>
                            <path d="M6 14h12"></path>
                            <rect width="12" height="12" x="6" y="10"></rect>
                        </svg>
                    </div>
                </Link>

                <Link className={` ${isProductsSelected ? "bg-gray-400 rounded-lg shadow-sm mx-3 w-12 my-3" : "mx-3 w-12 my-3"}`} href={"/pages/products"} >
                    <div className="flex flex-row justify-center mx-3 my-3 " >
                        <svg data-id="5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isProductsSelected ? "white" : "gray"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                    </div>
                </Link>

                <Link className={` ${isProvidersSelected ? "bg-gray-400 rounded-lg shadow-sm mx-3 w-12 my-3" : "mx-3 w-12 my-3"}`} href={"/pages/providers"} >
                    <div className="flex flex-row justify-center my-3  " >
                        <svg data-id="7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isProvidersSelected ? "white" : "gray"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
                            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                            <path d="M15 18H9"></path>
                            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                            <circle cx="17" cy="18" r="2"></circle>
                            <circle cx="7" cy="18" r="2"></circle>
                        </svg>
                    </div>
                </Link>

                <Link className={` ${isTurnoverSelected ? "bg-gray-400 rounded-lg shadow-sm mx-3 w-12 my-3" : "mx-3 w-12 my-3"}`} href={"/pages/turnover"} >
                    <div className="flex flex-row justify-center my-3  " >
                        <svg data-id="83" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isTurnoverSelected ? "white" : "gray"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-muted-foreground">
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                            <path d="M21 3v5h-5"></path>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                            <path d="M8 16H3v5"></path>
                        </svg>
                    </div>
                </Link>

                <Link className={` ${isPeopleHubSelected ? "bg-gray-400 rounded-lg shadow-sm mx-3 w-12 my-3" : "mx-3 w-12 my-3"}`} href={"/pages/peoplehub"} >
                    <div className="flex flex-row justify-center my-3  " >
                        <svg data-id="97" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isPeopleHubSelected ? "white" : "gray"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-muted-foreground">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                </Link>

                <Link className={` ${isAnalyticsSelected ? "bg-gray-400 rounded-lg shadow-sm mx-3 w-12 my-3" : "mx-3 w-12 my-3"}`} href={"/pages/analytics"} >
                    <div className="flex flex-row justify-center my-3  " >
                        <svg data-id="9" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isAnalyticsSelected ? "white" : "gray"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
                            <path d="M3 3v18h18"></path>
                            <path d="m19 9-5 5-4-4-3 3"></path>
                        </svg>
                    </div>
                </Link>
            </div>

            <Link className={` ${isSettingsSelected ? " mb-12 mx-auto flex flex-row justify-center bg-gray-400 rounded-lg shadow-sm mx-3 w-12 py-3" : "m-5 mb-12 flex flex-row justify-center py-3"}`} href={"/pages/settings"} >
                <svg data-id="11" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isSettingsSelected ? "white" : "gray"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            </Link>
        </div>
    );
};

export default NavWebLogged;
