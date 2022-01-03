import React, { Component } from 'react';
import './header.css';
import Bars from './Bars.svg';
import Cancel from './cancel.svg';
import Logo from './logo.svg';

export default class header extends Component {

    state = {
        bars: true
    }

    myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
        this.setState({ bars: !this.state.bars })
    }
    render() {
        return (

            <div className="header" >
                <div class="topnav"
                    id="myTopnav" >
                    <a href="#home"
                        class="active" > < img className="logo"
                            src={Logo}
                        /></a >
                    <a className="animie nav_link" href="#Support" > Support </a>
                    <a className="animie nav_link" href="#Products" > Products </a>
                    <a className="animie nav_link" href="#Events" > Events </a>
                    <a className="animie nav_link" href="#Careeres" > Careers </a>
                    <a className="animie nav_link" href="#about" > About </a>
                    <a className="animie" href="javascript:void(0);"
                        class="icon"
                        onClick={this.myFunction} >
                        <img className="bars"
                            src={this.state.bars ? Bars : Cancel} /> </a>
                </div>
                <div>
                    <div className="header-text" >
                        <h1 class="hero-text" >
                            Immersive experiences that deliver </h1>
                    </div>
                </div>
            </div>
        )
    }
}