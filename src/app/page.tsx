
import AnalyticsComponent from "./components/analytics/AnalyticsComponent";
import InventoryOverview from "./components/Inventory/InventoryOverview";
import NavWebLogged from "./components/NavWebLogged";
import Search from "./components/Search";


export default function Home() {
  return (

    <>
      <NavWebLogged currentPage="dashboard"/>

      <div className="bg-gray-100 w-full h-full">
        <main className="flex min-h-screen flex-col   text-gray-700 py-12 p-12 w-full">
          <Search />
          <AnalyticsComponent />
          <InventoryOverview />
        </main>
      </div>
    </>
  );
}
