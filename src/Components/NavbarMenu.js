import * as React from 'react';
import '../styles/NavbarMenu.css';
import {Col, Container, Row} from "react-bootstrap";

export default class NavbarMenu extends React.Component {
    render() {
        const {isOpen} = this.props;

        return (
            <div className={'navbar-menu'} style={{top: (isOpen ? 0 : '-100%')}}>
                <div style={{height: '100%'}}>
                    <Container>
                        <Row className={'navbar-menu-row'}>
                            <Col sm={3} className={'navbar-link'} style={{
                                top: (isOpen ? 0 : 80),
                                opacity: (isOpen ? 1 : 0),
                                transitionDelay: '0.5s'
                            }}><a href={'/events'}>Events</a></Col>
                            <Col sm={4} className={'navbar-link'} style={{
                                top: (isOpen ? 0 : 80),
                                opacity: (isOpen ? 1 : 0),
                                transitionDelay: '0.7s'
                            }}><a href={'/workshops'}>Workshops</a></Col>
                            <Col sm={4} className={'navbar-link'} style={{
                                top: (isOpen ? 0 : 80),
                                opacity: (isOpen ? 1 : 0),
                                transitionDelay: '0.9s'
                            }}><a>Accommodation</a></Col>
                        </Row>
                        {/*<Row className={'navbar-menu-row'}>*/}
                        {/*    <Col sm={4} className={'navbar-link'} style={{*/}
                        {/*        top: (isOpen ? 0 : 80),*/}
                        {/*        opacity: (isOpen ? 1 : 0),*/}
                        {/*        transitionDelay: '1.1s'*/}
                        {/*    }}><a>Login</a></Col>*/}
                        {/*</Row>*/}
                    </Container>
                </div>
            </div>
        );
    }
}