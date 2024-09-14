 
import InventoryOverview from "./components/Inventory/InventoryOverview";
import Search from "./components/Search";
 
import Analytics from "./components/analytics/Analytics";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   text-gray-700 py-12 p-12 w-full">
      <Search/>
       <Analytics/>
       <InventoryOverview/>
    </main>
  );
}
