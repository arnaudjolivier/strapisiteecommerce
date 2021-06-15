import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Button} from 'react-bootstrap';
import './css/style.css';
import Title from './Title.js';
import Menu from './Menu';
import CustomCarousel from './CustomCarousel';



class ArticleCategory extends React.Component{
    constructor(){
        super();
    }

    render(){
        let prods = this.props.products.filter(p => p.categorie?p.categorie.id==this.props.match.params.id:false)
        return(
            <div className="App">
            <div className="App-Header">
            <Title/>
            </div>
                <div> 
                <Menu/>
                <CustomCarousel/>
                        
                <Row>
                {
                    prods.map((product,key) => <Col className="articlecustom" key={key} xs={12} md={6} lg={4} >
                            <h2>{product.name}</h2>
                            <img className="ImgHover" src={"http://localhost:1337"+product.image.url} alt={product.name}/>
                            <p>{product.price} €</p>
                            <Button onClick={()=>this.props.addArticleToPanier(product)}>Ajouter au panier</Button>
                        </Col>)
                }

            </Row>
    </div>
    </div>
        );
    }
}


export default ArticleCategory;