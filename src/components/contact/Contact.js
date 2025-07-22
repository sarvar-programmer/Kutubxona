import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../css/contact.css'

export default function Contact() {
  return (
    <>
      <Container className="location">
        <Row className='basic'>
          <Col md={7} className="library_location">

          </Col>
          <Col md={5} className='right_part'>
            <div className="information_input">
              <p className="text-white  information">
                Savollaringiz bo’lsa<br/> qoldiring
              </p>
              <p className="text-white reference_point">
                Biz siz bilan bog’lanamiz
              </p>
              <input type="text" placeholder="Ismingizni kiriting" className="name_inp" />
              <input type="text" placeholder="+998-(90)-123 -45-56" className="phone_inp" />
              <input type="text" placeholder="Savolingizni kiriting" className="question_inp" />
              <Button className="btn-success send_btn">Jo'natish</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
