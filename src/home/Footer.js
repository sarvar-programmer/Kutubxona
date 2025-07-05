import React from "react";
import { FaInstagram, FaTelegramPlane, FaYoutube, FaFacebookF, FaHome, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Col, Row } from 'react-bootstrap';
import '../css/footer.css'

export default class Footer extends React.Component {
    render() {
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

                <footer>
                    <Row>
                        <Col md={4}>
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
                        <Col md={2} className="text-white pages">
                            <p>
                                Bosh sahifa
                            </p>
                            <p>
                                Yangiliklar
                            </p>
                            <p>
                                Kitoblar
                            </p>
                            <p>
                                Biz haqimizda
                            </p>
                        </Col>
                        <Col md={3} className=" text-white connection">
                            <p className="con_title">
                                Biz bilan bog’laning
                            </p>
                            <div className="d-flex con_icon">
                                <div className="icons">
                                    <FaHome size={21} />
                                </div>
                                <p>Xorazm viloyati, Tuproqqal'a tumani, Pitnak, Mustaqillik ko'chasi, 1-uy</p>
                            </div>
                            <div className="d-flex con_icon">
                                <div className="icons">
                                    <FaPhone size={21} />
                                </div>
                                <p className="phone_sec">
                                    +998 77 317 14 05
                                </p>
                            </div>
                            <div className="d-flex con_icon">
                                <div className="icons">
                                    <FaRegEnvelope size={21} />
                                </div>
                                <p className="email">tuproqqalatumaniaxborotkutubxo@gmail.com</p>
                            </div>
                        </Col>
                    </Row>

                </footer>
            </>
        )
    }
}