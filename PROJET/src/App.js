
import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title.js';
import ViewArticle from './ViewArticle';
import logo from './images/logo.png';
import Button from 'react-bootstrap/Button';
import Menu from './Menu';
import Accueil from './Accueil';
import CustomCarousel from './CustomCarousel';
import swal from 'sweetalert';
import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



//PC GAMING
import pcGamerOmen25 from './images/pcGamerOmen25.png';
import pcGamerMegaport from './images/pcGamerMegaport.png';
import pcGamerMegaport1 from './images/pcGamerMegaport1.png';
import pcGamerGrosBill from './images/pcGamerGrosBill.png';


//DIVERS 

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { render } from '@testing-library/react';
import ArticleCategory from './ArticleCategory';
import PcFixe from './PcFixe';
import Panier from './Panier';

class App extends React.Component{
  constructor(){
      super();
      this.state = {
          products: [],
          categories: [],
          panier:[]

      }
  }

  addArticleToPanier = (article) =>{
      let newPanier = this.state.panier
      newPanier.push(article)
      this.setState({panier:newPanier}, ()=>console.log(this.state.panier))
      
      
     swal("Produit ajouté au panier avec succès ! ")
    }
    

render() {
  return (
    <Router>
        <Switch>

          <Route exact path='/' render={(props) =>(
            <Accueil {...props}
            products = {this.state.products}
            panier={this.state.panier}
            categories={this.state.categories}
            addArticleToPanier={this.addArticleToPanier} />

          )} />

          <Route exact path='/Panier' render={(props) =>(
            <Panier {...props}
            panier={this.state.panier} />
          )} />

        <Route exact path='/boutique/:id' render={(props) =>(
            <ArticleCategory {...props}
            products = {this.state.products}
            panier={this.state.panier}
            categorie={this.state.categories}
            addArticleToPanier={this.addArticleToPanier} />

          )} />
        </Switch>
      </Router>

  );
}

async componentDidMount(){
  const queryArticles = await fetch('http://localhost:1337/articles',{
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
      }
  })
  
  const articles = await queryArticles.json()
  const queryCategories = await fetch('http://localhost:1337/categories',{
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
      }
  })

  const categories = await queryCategories.json()

  this.setState({
      products: articles,
      categories:categories,

      
  }
  )
}
}



export default App;
