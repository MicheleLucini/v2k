import React, { useRef, useEffect } from "react";
// import { useNavigator } from "../contexts/NavigatorContext";
import ButtonDoubleText from '../components/buttonDoubleText/ButtonDoubleText';
import Logo from '../assets/Logo.svg'
import ImgLogoIlly from '../assets/illy.png'
import ImgLogoHitaca from '../assets/hitaca.png'
import ImgFlessyL from '../assets/flessy_L_master.png'
import ImgFlessyM from '../assets/flessy_M_master.png'
import ImgFlessyXL from '../assets/flessy_XL_master.png'
import ImgIntuity from '../assets/intuity_21.png'
import ImgCatalogSBF from '../assets/catalog_sbf.png'
import ImgCatalogBC from '../assets/catalog_bc.png'
import ImgCatalogCC from '../assets/catalog_cc.png'
import ImgCatalogDA from '../assets/catalog_da.png'
import ImgLogoML from '../assets/ml.png'
import { useOnScreen } from '../useOnScreen';
import "./home.css";

const Home = () => {
  const refSectionMotto = useRef();
  const refSectionMotto2 = useRef();

  const onScreenSectionMotto = useOnScreen(refSectionMotto, "-150px");
  const onScreenSectionMotto2 = useOnScreen(refSectionMotto2, "-100px");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <div className='section home-section-logo'>
        <img src={Logo} alt="Logo Vending 2000" />
        <div>
          <span>L’eccellenza della pausa italiana<br />Concessionario ufficiale illy</span>
          <img src={ImgLogoIlly} alt="Logo illy" />
          <div />
          <img src={ImgLogoHitaca} alt="Logo hitaca" />
        </div>
      </div>

      <h1 className='section home-section-title'>Gestione Distributori<br />Automatici</h1>

      <div className="section home-section-first-media-card">
        <div className="wrapper">
          <img src={ImgFlessyXL} alt="Flessy XL master" />
          <img src={ImgFlessyL} alt="Flessy L master" />
          <img src={ImgFlessyM} alt="Flessy M master" />
          <img src={ImgIntuity} alt="Intuity 21" />
        </div>
      </div>

      <div
        ref={refSectionMotto}
        className={"section home-section-motto " + (onScreenSectionMotto.wasIntersected ? "appear" : "")}
      >
        <div>
          <p><span>VENDING 2000 SRL</span> offre solo prodotti di <span>qualità</span> per le</p>
        </div>
        <div>
          <p>tue esigenze. Lavoriamo nell'area di Milano Cremona</p>
        </div>
        <div>
          <p>e tutto l' hinterland, sin dal 2000 siamo orgogliosi</p>
        </div>
        <div>
          <p>della <span>reputazione</span> che ci siamo costruiti come uno dei</p>
        </div>
        <div>
          <p><span>migliori fornitori</span> della zona.</p>
        </div>
      </div>

      <div className="section home-section-catalog">
        <a className='sbf' href="#">
          <div className='container'>
            <h2 className="title">Distributori per snacks<br />e bevande fredde</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ButtonDoubleText text="Scopri" />
            <div className='image-wrapper'>
              <img src={ImgCatalogSBF} alt="Prodotti snack e bevande fredde" />
            </div>
          </div>
        </a>
        <a className="bc" href="#">
          <div className='container'>
            <h2 className="title">Distributori bevande calde</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ButtonDoubleText text="Scopri" />
            <div className='image-wrapper'>
              <img src={ImgCatalogBC} alt="Prodotti bevande calde" />
            </div>
          </div>
        </a>
        <a className="cc" href="#">
          <div className='container'>
            <h2 className="title">Macchine per caffè<br />in cialde ocs</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ButtonDoubleText text="Scopri" />
            <div className='image-wrapper'>
              <img src={ImgCatalogCC} alt="Prodotti macchine per caffè" />
            </div>
          </div>
        </a>
        <a className="da" href="#">
          <div className='container'>
            <h2 className="title">Dispenser acqua</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ButtonDoubleText text="Scopri" />
            <div className='image-wrapper'>
              <img src={ImgCatalogDA} alt="Prodotti dispenser acqua" />
            </div>
          </div>
        </a>
      </div>

      <div
        ref={refSectionMotto2}
        className={"section home-section-motto " + (onScreenSectionMotto2.wasIntersected ? "appear" : "")}
      >
        <div>
          <p>Sin dal 2000, lavoriamo per creare <span>rapporti duraturi</span></p>
        </div>
        <div>
          <p>coi nostri clienti e garantire <span>prezzi ragionevoli</span> e</p>
        </div>
        <div>
          <p>materiali di qualità elevata consegnati senza</p>
        </div>
        <div>
          <p>inconvenienti.</p>
        </div>
      </div>

      <div className="section home-section-motto appear">
        <div>
          <p>Verifica la disponibilità dei nostri prodotti e le loro specifiche nella <a>pagina prodotti</a>.</p>
        </div>
      </div>

      <div className="section home-section-separator" />

      <div className="section home-section-motto appear">
        <div>
          <p><span>CONTATTI</span></p>
        </div>
        <div>
          <p><span>Via Michelozzo Da Forlì 8 Pioltello 20096 MI</span></p>
        </div>
        <div>
          <p><a>vending2000srl@gmail.com</a></p>
        </div>
        <div>
          <p><span>Tl. 02 92165421</span></p>
        </div>
        <div>
          <p><span>Cell. 3488402244</span></p>
        </div>
      </div>

      <div className="footer">
        <span>© 2000 - 2023 Vending 2000 S.R.L.</span>
        <span>Design & Development</span>
        <img src={ImgLogoML} alt="Logo Michele Lucini" />
      </div>
    </>
  );
};

export default Home;
