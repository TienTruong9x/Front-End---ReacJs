import React, { Component } from 'react';
import "./Contact.css";

class Contact extends Component {
    render() {
        return (
            <div className="contact_main">
                <p className="contact-title">CONTACT ME</p>
                <div className="contact-item">
                    <a href="https://www.facebook.com/tientruongchamcom/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" ></i></a>
                    <a href="https://github.com/TienTruong9x" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
                    <a href="https://www.facebook.com/messages/tientruongchamcom" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-messenger"></i></a>
                </div>
            </div>
        );
    }
}

export default Contact;
