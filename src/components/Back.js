import React from 'react';
import './Back.css';
import { Link } from 'react-router-dom';

export default function Back() {
    return (
        <Link to="/"> 
        <div id="backButton">
        <i className="fa fa-home" style={{fontSize:"30px", color : "white"}}></i>            
        </div>
        </Link>
    )
};
