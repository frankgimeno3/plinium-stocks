import React, { FC } from 'react';

interface NavUnloggedProps {

}

const NavUnlogged: FC<NavUnloggedProps> = ({ }) => {
  return (
    <div className="flex flex-row justify-between bg-white border border-gray-300 shadow   text-gray-500 p-3 items-center px-8">
      <div className='flex flex-row items-center'>
      <p className='text-xl'>P<span className='text-gray-700 '>LYNIUM</span></p>
      <p className='mt-2 ml-1 text-xs text-gray-700'>.COM</p>
      </div>

      <div className='flex flex-row text-sm'>
      <p className='mx-1 hover:text-gray-900 hover:font-bold w-44 text-center'>Gestión de Tiendas</p>
      <p className='mx-1 hover:text-gray-900 hover:font-bold w-44 text-center'>Gestión de Stock</p>
      <p className='mx-1 hover:text-gray-900 hover:font-bold w-36 text-center'>POS y TPV</p>
      <p className='mx-1 hover:text-gray-900 hover:font-bold w-44 text-center'>Cajeros Inteligentes</p>
      </div>
      <div className='flex flex-row'>
        <button className='px-2 m-2 border border-gray-200 rounded-xl py-1 text-sm bg-gray-50 bg-opacity-20 hover:bg-opacity-100'>
          Iniciar Sesión</button>
        <button className='px-2 m-2 border border-gray-200 rounded-xl py-1 text-sm bg-gray-50 bg-opacity-20 hover:bg-opacity-100'>
          Pruébanos</button>
      </div>
    </div>
  );
};

export default NavUnlogged;