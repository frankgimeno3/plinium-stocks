import Image from "next/image";
import NavWebLogged from "./components/NavWebLogged";
import InventoryOverview from "./components/widgets/InventoryOverview";
import Search from "./components/Search";
import StockValue from "./components/widgets/StockValueW";
import StockMovement from "./components/widgets/StockMovement";
import BestSelling from "./components/widgets/BestSelling";
import SupplierPerformance from "./components/widgets/SupplierPerformance";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   text-gray-700 py-12 p-12 w-full">
      <Search/>
       <div className="flex flex-wrap w-full mx-auto justify-between">
       <StockValue/>
       <StockMovement/>
       <BestSelling/>
       <SupplierPerformance/>
       </div>
       <InventoryOverview/>
    </main>
  );
}
