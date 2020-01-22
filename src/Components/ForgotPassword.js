import * as React from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import '../styles/ForgotPassword.css';
import {Col, Row} from "react-bootstrap";

export default function ForgotPassword() {
    const [email, changeEmail] = React.useState("");

    const sendResetLink = () => {
        fetch("http://localhost:8000/api/user/forgotPassword", {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <Navbar/>
            <section className={'forgot-password-form'} style={{minHeight: '100vh'}}>
                <Row style={{width: '100%', margin: 0}}>
                    <Col md={1}/>
                    <Col md={8}>
                        <div className={'forgot-password-title'}>
                            <b>Forgot Password</b>
                        </div>
                    </Col>
                </Row>
                <Row style={{width: '100%', paddingBottom: 60, margin: 0}}>
                    <Col md={1}/>
                    <Col md={4} className={'input-field-col'}>
                        <input className={'input-field'} placeholder={'Email*'} value={email}
                               onChange={(e) => changeEmail(e.target.value)} type="text"/>
                    </Col>
                </Row>
                <Row style={{width: '100%', paddingBottom: 30, margin: 0}}>
                    <Col md={1}/>
                    <Col md={4}>
                        <div className={'forgot-password-button'}>
                            <a onClick={sendResetLink} className="sbtn sbtn-1 reset-link-btn">Send Reset link</a>
                        </div>
                    </Col>
                </Row>
            </section>
            <Footer/>
        </div>
    );
}