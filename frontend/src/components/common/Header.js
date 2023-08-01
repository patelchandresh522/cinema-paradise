import React from 'react'
import logo from '../../assets/cinema-img/logo.png';
import searchImg from '../../assets/cinema-img/icon-search.svg'
import iceImg from '../../assets/cinema-img/ice age2.png'
import blueBg from '../../assets/cinema-img/blue-bg.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <nav>
      <div class="left-nav">
        <img src={logo} alt="logo" />
      </div>
      <div class="right-nav">
        <img src={searchImg} alt="search" />
        <Link to="/category">Category</Link>
        <Link to="/favorite">Whislist</Link>
      </div>
    </nav>
    <section class="ice-age">
      <div class="info">
        <h1>ICE AGE</h1>
        <p>
          With global warming threatening their once-icy domain with
          widespread flooding, Manny (Ray Romano), Sid (John Alberto
          Leguizamo) and Diego (Denis Leary) set out to find a safe haven.
          Along the way, another mammoth Queen Latifah), who thinks she is an
          opossum, joins the travellers on their perilous quest.
        </p>
        <button>Watch Now</button>
      </div>
      <div class="image">
        <img src={iceImg} alt="ice-age" />
      </div>
    </section>
    <div class="filter">
      <img src={blueBg} alt="blue-bg" />
    </div>
  </header>
  )
}

export default Header