import './css/style.css';
import './css/menu.css';
import Title from './Title.js';
import ViewArticle from './ViewArticle';
import logo from './images/logo.png';
import Button from 'react-bootstrap/Button';
import './Menu.js';
import {Link} from 'react-router-dom';
import {Navbar,Toggle,Brand,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaShoppingBag} from "react-icons/fa";


function Menu(){
  return(
    
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#"><Link to="/">Accueil</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
 <NavDropdown title="Ordinateurs" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link  to="/boutique/2">PC Gamers Fixes</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/boutique/1">PC Portables</Link></NavDropdown.Item>
      </NavDropdown>
       <NavDropdown title="Composants PC" id="collasible-nav-dropdown">
        <NavDropdown.Item><Link to="/boutique/4">Cartes graphiques</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/boutique/5">Disques durs SSD</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/boutique/6">Disques durs</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/boutique/7">Disques durs externe</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/boutique/8">Processeurs</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/boutique/9">Cartes mères</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/boutique/10">Barrettes mémoires</Link></NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Périphériques PC" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link to="/boutique/11">Écrans</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/boutique/12">Claviers</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/boutique/13">Souris</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/boutique/14">Casques micros</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#">
      <Link to="/Panier"><FaShoppingBag/> </Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  );
}

export default Menu;