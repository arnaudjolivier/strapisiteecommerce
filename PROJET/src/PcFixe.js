import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Button} from 'react-bootstrap';
import './css/style.css';
import Title from './Title.js';
import Menu from './Menu';
import CustomCarousel from './CustomCarousel';
import { BiBasket } from "react-icons/bi";
import Footer from './footer.js';


class PcFixe extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [],
            categories: [],

        }
    }

    render(){
        console.log(this.state.products);
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
                    this.state.products.map((product,key) => <Col className="articlecustom" key={key} xs={12} md={6} lg={4} >
                            <h2>{product.name}</h2>
                            <img className="ImgHover" src={"http://localhost:1337"+product.image.url} alt={product.name}/>
                            <p>{product.price} €</p>
                            <Button onclick={()=>this.props.addArticleToPanier(product)}>Ajouter au panier</Button>
                          
                        </Col>)
                }

            </Row>
            
    </div>
    </div>
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


export default PcFixe;