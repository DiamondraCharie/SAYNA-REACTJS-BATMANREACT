import React from 'react'
import icon_WB  from '../assets/logos/icon_WB.png';
import logo_1 from '../assets/logos/logo_1.png';
import logo_2 from '../assets/logos/logo_2.png';
import logo_3 from '../assets/logos/logo_3.png';
import logo_4 from '../assets/logos/logo_4.png';
import logo_5 from '../assets/logos/logo_5.png';
import logo_6 from '../assets/logos/logo_6.png';
import '../styles/footer.css';

function Footer() {
  return (
    <footer class="mt-5 py-5">
  <div class="container text-center">
    <div class="text-footer">
      <img src={icon_WB } alt="" />
     <span class="textfooter"> Ce projet respecte l’univers cinématographique des films Batman
      récents. Version Nolan & Snyder & Reeves</span>
    </div>
    <div class="social-footer mt-3">
      <a href="" class="social-item hoveryellow">
        <img width={logo_1} alt="" />
        <img src={logo_2} alt="" />
        <img width="4%" src={logo_3} alt="" />
      </a>
      <a href="" class="social-item"
        ><img
          class="hoveryellow"
          src={logo_4}
          alt=""
      /></a>
      <a href="" class="social-item"
        ><img class="hoveryellow" src={logo_5} alt=""
      /></a>
      <a href="" class="social-item"
        ><img class="hoveryellow" src={logo_6} alt=""
      /></a>
    </div>
  </div>
</footer>
  )
}

export default Footer