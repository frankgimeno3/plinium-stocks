
"use client"
import CajerosInteligentes from "./components/home/comp/CajerosInteligentes";
import GestionTiendas from "./components/home/comp/GestionTiendas";
import PosTpv from "./components/home/comp/PosTpv";
import StocksPedidos from "./components/home/comp/StocksPedidos";
 import Hero from "./components/home/Hero";
import WhatWeDo from "./components/home/WhatWeDo";
 import NavUnlogged from "./components/NavUnlogged";
 

export default function Home() {
  return (

    <div className="flex flex-col">
      <NavUnlogged />
      <main className="bg-gray-100 w-full h-full flex min-h-screen flex-col   text-gray-700 py-12  w-full">
       <Hero/>
<p className="py-12 text-center text-red-500 text-4xl"> Todo tiene que ir con fotos o vídeos grandes de fondo, texto en blanco y botones en blanco</p>

       <WhatWeDo/>
       <div className="text-center mt-12">
        <GestionTiendas/>
        <StocksPedidos/>
        <PosTpv/>
        <CajerosInteligentes/>
       </div>
      </main>
       <div className="bg-white border-t border-gray-200 p-8 text-center text-gray-500 w-full">Footer</div>
    </div>
  );
}
