import React, { FC } from 'react';

interface HeroProps {
  
}

const Hero: FC<HeroProps> = ({ }) => {
  return (
    <div className='text-center'>
        <p className='font-bold text-3xl'>Bienvenido a la <span className='italic'>retail intelligence</span></p>
        <p className='mt-3'>Plynium es un ecosistema modular, </p>
        <p className=''> creado para que puedas dar el siguiente paso con tu comercio retail</p> 
        <p className=''>combinando hardware con software de tecnología puntera.</p>
        </div>
  );
};

export default Hero;