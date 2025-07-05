import React from "react";
import {  Col, Row, Button } from 'react-bootstrap';
import '../css/contact.css'

export default class Contact extends React.Component{
    render(){
      
        return(
            <>
             <section className="contact">
          <Row>
            <Col md={6}>

            </Col>
            <Col md={6}>
              <div className="info_send">
                <p className="text-white  send_info">
                  Savollaringiz bo’lsa qoldiring
                </p>
                <p className="text-white inf">
                  Biz siz bilan bog’lanamiz
                </p>
                <input type="text" placeholder="Ismingizni kiriting" className="name" />
                <input type="text" placeholder="+998-(90)-123 -45-56" className="phone" />
                <input type="text" placeholder="Savolingizni kiriting" className="question" />
                <Button className="btn-success send">Jo'natish</Button>
              </div>
            </Col>
          </Row>
        </section>
            </>
        )
    }
}