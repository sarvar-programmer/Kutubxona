import { Link } from 'react-router-dom';
import { FaInstagram, FaTelegramPlane, FaYoutube, FaFacebookF, FaHome, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/footer.css'

export default function Footer(){
  
        const icons = [FaInstagram, FaTelegramPlane, FaFacebookF, FaYoutube, RiTwitterXLine];
        const iconList = [];
        for (let i = 0; i < icons.length; i++) {
            const IconComponent = icons[i];
            iconList.push(
                <div className="msg_icon" key={i}>
                    <IconComponent className="text-white" size={30} />
                </div>
            );
        }
        return (
            <>
              <Container fluid className="footer">
                    <Row >
                        <Col md={5} className='border_box'>
                            <p className="text-white msg_title">Tuproqqal’a TAKM</p>
                            <p className=" text-white msg_info">
                                Kutubxonada ko`plab nodir va noyob adabiyotlar saqlanib kelinmoqda. Bizda elektron kitoblar ham mavjud. Ijtmoiy kanalarmiz orqali murojat qilishlaringgiz mumkin
                            </p>
                            <div className="d-flex messengers">
                                <div className="d-flex icon_wrapper" >
                                    {iconList}
                                </div>
                            </div>
                        </Col>
                        <Col md={2} className="text-white  pages border_box">
                                <Link className="links_footer" to="/">
                                    Bosh sahifa
                                </Link>
                            <Link className="links_footer" to="/news">
                                Yangiliklar
                            </Link>
                            <Link className="links_footer" to="/books">
                                Kitoblar
                            </Link>
                            <Link className="links_footer" to="/akm">
                                Biz haqimizda
                            </Link>
                        </Col>
                        <Col md={5} className=" text-white connection border_box">
                            <p className="con_title">
                                Biz bilan bog’laning
                            </p>
                            <div className="d-flex con_icon">
                                <div className="icons">
                                    <FaHome className='fahome'/>
                                </div>
                                <p className='adres_lib'>Xorazm viloyati, Tuproqqal'a tumani, Pitnak, Mustaqillik ko'chasi, 1-uy</p>
                            </div>
                            <div className="d-flex con_icon">
                                <div className="icons">
                                    <FaPhone className='faphone'/>
                                </div>
                                <p className="phone_sec">
                                    +998 77 317 14 05
                                </p>
                            </div>
                            <div className="d-flex con_icon">
                                <div className="icons">
                                    <FaRegEnvelope className='envelope'/>
                                </div>
                                <p className="email">tuproqqalatumaniaxborotkutubxo@gmail.com</p>
                            </div>
                        </Col>
                    </Row>
                    </Container>
            </>
        )
    }
