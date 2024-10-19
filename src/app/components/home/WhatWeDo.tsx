import React, { FC } from 'react';

interface WhatWeDoProps {

}

const WhatWeDo: FC<WhatWeDoProps> = ({ }) => {
    return (
        <div className='bg-white shadow rounded border border-gray-50 px-12 py-12   mt-12 text-center justify-center'   >
            <p className='text-2xl '>Qué hacemos?</p>
            <div className='flex flex-row items-center justify-center mt-3 text-sm'>
                <div className='flex flex-col m-3 rounded-md' style={{ width: " 200px", height:"250px" }}>
                    <p className='font-bold text-gray-500'>Gestión diaria de tiendas</p>
                    <p className='py-5 h-36 p-3'>Gestiona las ventas, el stock, el personal y las incidencias de cada tienda</p>
                    <button className='px-2 m-2  rounded-xl py-1 text-sm bg-gray-100 bg-opacity-50 hover:bg-opacity-100'>
                    Más información
                    </button>
                </div>

                <div className='flex flex-col m-3 rounded-md' style={{ width: " 200px", height:"250px" }}>
                    <p className='font-bold text-gray-500'>Gestión de stocks y pedidos</p>
                    <p className='py-5 h-36 p-3'>Controla en tiempo real el stock de cada tienda o almacén, gestiona y automatiza pedidos a proveedores</p>
                    <button className='px-2 m-2  rounded-xl py-1 text-sm bg-gray-100 bg-opacity-50 hover:bg-opacity-100'>
                    Más información
                    </button>
                </div>

                <div className='flex flex-col m-3 rounded-md' style={{ width: " 200px", height:"250px" }}>
                    <p className='font-bold text-gray-500'>POS y TPV</p>
                    <p className='py-5 h-36 p-3'>Usa y configura tu POS y TPV según tus necesidades, para diferentes tiendas y tipos de cajero</p>
                    <button className='px-2 m-2  rounded-xl py-1 text-sm bg-gray-100 bg-opacity-50 hover:bg-opacity-100'>
                    Más información
                    </button>
                </div>

                <div className='flex flex-col m-3 rounded-md' style={{ width: " 200px", height:"250px" }}>
                    <p className='font-bold text-gray-500'>Cajeros inteligentes</p>
                    <p className='py-5 h-36 p-3'>Descubre el potencial de nuestros cajeros inteligentes, con pistola térmica o con cajas lectoras de RFID</p>
                    <button className='px-2 m-2  rounded-xl py-1 text-sm bg-gray-100 bg-opacity-50 hover:bg-opacity-100'>
                    Más información
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;