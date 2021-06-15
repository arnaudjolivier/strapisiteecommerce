import React from 'react';
import ReactDOM from 'react-dom';
import CustomCarousel from './CustomCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

class ViewArticle extends React.Component {
    constructor(props){
        super();
        this.state = {
            name: props.name,
            price: props.price,
            image : props.image,
            description: props.description,
            test:true

        }

    }
    render() {
      return <h2 className="articlecustom">{this.state.name} - Price: {this.state.price} $ <img className = "imgArticle"src={this.state.image}/>
      <button className="buttonAddP">Ajouter au panier</button>
      <p>Description:</p> <p className="articleDesc">{this.state.description}</p>
      </h2>;

    }
  }

  


export default ViewArticle;