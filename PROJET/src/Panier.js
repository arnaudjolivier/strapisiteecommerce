import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Button} from 'react-bootstrap';
import './css/style.css';
import CustomCarousel from './CustomCarousel';
import Title from './Title.js';
import swal from 'sweetalert';
import Menu from './Menu.js';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


class Panier extends React.Component{
    constructor(){
        super();

    }


    showPrixTotal=()=>{
        let total = 0
        this.props.panier.forEach(produit =>{
                total+=produit.price
        });
            return total;
    }
      


    makeOrder = async()=>{
        await fetch('http://localhost:1337/commandes', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'

        },
        body: JSON.stringify({
            numero: 1,
            articles: this.props.panier
        })
        

    })

     swal("Commande passée avec succès !")

}

    render(){
        return(
            
            
        <div className="App">
            <div className="App-Header">
            <Title/>
            </div>
                <div> 
                <Menu/>
                <CustomCarousel/>
                <>
                <h1 className="h1Panier">Panier</h1>
                <Row>
                {
                    this.props.panier.map((product,key) => <Col className="PanierDiv" key={key} xs={12} md={6} lg={4} >
                            <h2>{product.name}</h2>
                            <img className="imgPanier" src={"http://localhost:1337"+product.image.url} alt={product.name}/>
                            <p className="priceP">{product.price} €</p>
                            
                    
                        </Col>)

                }
                <div className="divOrder">
                <p className="priceorder">Le prix total de la commande est de : {this.showPrixTotal()} €</p>
            <form method="get" action="http://localhost:3000/Panier">
                <Button type="submit">Vider le Panier</Button>
            </form>
            <Button onClick={this.makeOrder}>Payer ma commande </Button>
            </div>

            </Row>
            </>
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


export default  Panier;