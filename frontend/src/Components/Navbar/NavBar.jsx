import React from "react";
import "./NavBar.css"
import logo from "./GamersPort.gif"
export default function NavBar(){
    return(
        <div className="navbar-main">
            <div className="navbar">
            <img className="navbar-img" src={logo}></img>
            <ul className="navbar-ul">
                <li className="navbar-li">Home</li>
                <div className="vl"></div>
                <li className="navbar-li">About</li>
                <div className="vl"></div>
                <li className="navbar-li">Contact</li>
                <div className="vl"></div>
            </ul>
            <ul className="navbar-ul">
                <li className="navbar-li">Login</li>
                <div className="vl"></div>
                <li className="navbar-li">Register</li>
                <div className="vl"></div>
            </ul>
            </div> 
            <div className="fade"></div>
        </div>
    );
}