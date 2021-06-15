import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Carousel} from 'react-bootstrap';
import carousel1 from './images/carousel1.png';
import carousel2 from './images/carousel2.png';
import carousel3 from './images/carousel3.png';


function CustomCarousel(){
    return(
<Carousel>
  <Carousel.Item className="carouselBorder">
    <img 
      className="d-block w-100"
      src={carousel2}
      alt="First slide"
      height="300"
    />
    <Carousel.Caption>
      <h3 className="carouselh3">Optes pour le PC</h3>
      <p className="carouselP">Des graphismes exeptionnels avec nos configs.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carouselBorder">
    <img
      className="d-block w-100"
      src={carousel1}
      alt="Second slide"
      height="300"
    />

    <Carousel.Caption>
      <h3 className="carouselh3">Des produits de qualités</h3>
      <p className="carouselP">Des centaines de clients satisfaites de notre travail</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carouselBorder">
    <img
      className="d-block w-100"
      src={carousel3}
      alt="Third slide"
      height="300"
    />

    <Carousel.Caption>
      <h3 className="carouselh3">Des PC pour tous les prix</h3>
      <p className="carouselP">Petit, moyen, ou gros budget, à toi de choisir !</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default CustomCarousel;
