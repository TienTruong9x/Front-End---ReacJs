import React, { Component } from 'react';
import Background from './../../asset/img/header.png';
import './Info.css';

var infoStyle={
    backgroundImage: `url(${Background})`
}

class Info extends Component {
    render() {
        return (
            <div className="info" style={infoStyle}>
            <span className="details">
                <h1 className="">NGUYEN VAN TRUONG</h1>
                <p>ReactJS Fresher</p>
                <p className="">03731.88868</p>
                </span>
            </div>
        );
    }
}

export default Info;
