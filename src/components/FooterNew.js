import React, { Component } from 'react';
import { FaMapMarkerAlt,FaPhoneAlt,FaFacebook,FaLinkedin,FaTwitterSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {AiFillInstagram} from 'react-icons/ai';
import Logo from './pictures/Final Main Logo PET MET.png'
import './Footer.css';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer">
                <hr />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-5">
                            <img className="footer_img" src={Logo} alt="logo"></img>
                            <p className="mt-3">Petmet is the one stop destination for all the needs of your pets.</p>
                            <div className="row ml-4 mb-4">
                                <span className="footer_icon social"><FaFacebook /></span>
                                <span className="footer_icon social"><AiFillInstagram /></span>
                                <span className="footer_icon social"><FaLinkedin /></span>
                                <span className="footer_icon social"><FaTwitterSquare /></span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3">
                            <h5>Useful Links</h5>
                            <ul className="list-unstyled">
                                <li>Home</li><br />
                                <li>Home</li><br />
                                <li>Home</li><br />
                                <li>Home</li><br />
                            </ul>
                        </div>
                        <div className="col-12 col-sm-4">
                            <h5>Contact Info.</h5>
                            <p><span className="footer_icon"><FaMapMarkerAlt /></span> ABC ubfuwgeghe, Chandigarh, India</p>
                            <p><span className="footer_icon"><MdEmail /></span> petmet@gmail.com</p>
                            <p><span className="footer_icon"><FaPhoneAlt /></span> +91 9832577388</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row mt-3 justify-content-center">
                        <p>Copyright &copy; 2020 PetMet India, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Footer;