
import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Button} from 'react-bootstrap';
import logo from './images/gclogo.png';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter, AiFillFacebook, AiFillPhone, AiOutlineMail} from "react-icons/ai";


class Footer extends React.Component{
    constructor(){
        super();
    }


    render(){
        return(

    <footer className="footer">
                    <Row>

                        <Col lg={4}>
                            <p>CONTACTEZ-NOUS</p>
                            <AiFillPhone/> Tél. : +334 28 29 81 03 <br/>
                            <AiOutlineMail/> contact@gamingcampus.fr<br/>
                            </Col>

                            <Col lg={4}>
                        <img src={logo}></img>
                </Col>

                <Col lg={4}>
                            <p>SUIVEZ-NOUS</p>
                        <AiFillInstagram/> <a href="https://www.instagram.com/gamingcampus/" target="_blank">instagram Gaming Campus</a><br/>
                        <AiFillYoutube/> <a href="https://www.youtube.com/channel/UCb5g4ylbCuv3G_BDUBURbBA" target="_blank">Youtube Gaming Campus</a><br/>
                        <AiOutlineTwitter/> <a href="https://twitter.com/GamingCampus" target="_blank">Twitter Gaming Campus</a><br/>
                        <AiFillFacebook/> <a href="https://www.facebook.com/GamingCampus/" target="_blank">Facebook Gaming Campus</a><br/>
                        </Col>
                        <Col lg={12} center>
                    <p>Computer © Shop. All rights reserved.</p>
                    </Col>
                    </Row>
                </footer>

    );
    }
    }

export default Footer;