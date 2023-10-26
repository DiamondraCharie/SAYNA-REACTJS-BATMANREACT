import React from 'react';
import '../styles/heroshop.css';

export const HeroShop = (props) => {
  const titre = props.titre;
  const name = props.name;
  return (
    <section id="hero">
       <div class="hero-image">
         <div class="container">
          <h1 class="hero-title text-uppercase">Recuperez le flow de <br/> {titre} avec notre {name}</h1>
         </div>
       </div>
    </section>
  )
}
