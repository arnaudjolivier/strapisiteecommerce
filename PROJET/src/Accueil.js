import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Button} from 'react-bootstrap';
import './css/style.css';
import CustomCarousel from './CustomCarousel';
import Title from './Title.js';
import Menu from './Menu.js';
import {Link} from 'react-router-dom';

import Footer from './footer.js';


class Accueil extends React.Component{
    constructor(){
        super();
    }


    render(){
        console.log(this.props.categories);
        return(
            
        <div className="App">
            <div className="App-Header">
            <Title/>
            </div>
                <div> 
                <Menu/>
                <CustomCarousel/>
                <Row className="centerRow">
                {
                    this.props.categories.map(c => <div class="indexA"><img className="imgCat" src={"http://localhost:1337"+c.image.url}></img><p className="categorieA"><Link to={"/boutique/"+c.id}>NOS {c.name}</Link></p></div>)
                }
            </Row>


  
            
    </div>
    </div>
    );
}
}




export default Accueil;