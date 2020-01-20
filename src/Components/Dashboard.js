import * as React from 'react';
import Navbar from "./Navbar";
import '../styles/Dashboard.css';
import '../styles/styled-buttons.css';
import {Col, Container, Row} from "react-bootstrap";
import ContactUs from "./ContactUs.";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Sponsor from "./Sponsor";

export default class Dashboard extends React.Component {
    render() {
        return <div>
            <Navbar/>
            <section>
                <div className={'dashboard-title'}>
                    <Row className={'vortex-title'} style={{width: '100%'}}>
                        <Col sm={1}/>
                        <Col sm={5}>
                            <img className={'dashboard-name'} src={'images/dashboard-name.png'}/>
                        </Col>
                        <Col sm={6}/>
                    </Row>
                    <Row style={{width: '100%'}} className={'vortex-description'}>
                        <Col sm={1}/>
                        <Col sm={5}>
                            Annual symposium of <b>CSEA</b>, NIT Trichy
                        </Col>
                        <Col sm={6}/>
                    </Row>
                </div>
                <div className={'dashboard-title-background'}>
                    <img src={'images/dashboard-logo.png'} style={{float: 'right'}} alt={'logo'} height={'100%'}
                         width={950}/>
                </div>
                <div className={'dashboard-login-button'}>
                    <a href={'/register'} className="sbtn sbtn-4 sbtn-4c icon-arrow-right">Register</a>
                </div>
            </section>
            <section>
                <AboutUs/>
            </section>
            <section>
                <Sponsor/>
            </section>
            <section>
                <ContactUs/>
            </section>
            <Footer/>
        </div>;
    }
}