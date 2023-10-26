import React, { useState } from 'react';
import { HeroShop } from '../components/HeroShop';

function Eshop() {
  const [titre,setTitre] = useState('sayna');
  const [name, setName]= useState('Sylvain');
  return (
    <>
      <HeroShop titre={titre} name={name}/>
      <h1>Filter</h1>
      <h1>Product list</h1>
    </>
  )
}

export default Eshop