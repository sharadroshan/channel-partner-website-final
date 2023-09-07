import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroContactFrom from '../HeroContactFrom'

import './style.css'

import hero1 from '../../images/slider/2.jpg'
import hero2 from '../../images/slider/1.jpg'
import hero3 from '../../images/slider/3.jpg'
import { Link } from "react-router-dom";



class Hero extends Component {
    render() {

        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }

        return (
            <section className={`hero hero-slider-wrapper hx-hero-style-1 ${this.props.heroClass}`}>
                <div className="hero-slider">
                    <Slider {...settings}>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="container header-p">
                                    <div className="row">
                                        <div className="col col-lg-6 hx-slide-caption">
                                            <h2>Best Car Repairing Services</h2>
                                            <p>Quality Auto Repair WordPress Theme in Envato Market.We offer a variety of Custom services.</p>
                                            <div className="btn-style">
                                                <Link onClick={ClickHandler} to="/about">More About</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <HeroContactFrom/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
                                <div className="container header-p">
                                    <div className="row">
                                        <div className="col col-lg-6 hx-slide-caption">
                                            <h2>Your Car is in the Right Hands.</h2>
                                            <p>Quality Auto Repair WordPress Theme in Envato Market.We offer a variety of Custom services.</p>
                                            <div className="btn-style">
                                                <Link onClick={ClickHandler} to="/about">More About</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <HeroContactFrom/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
                                 <div className="container header-p">
                                    <div className="row">
                                        <div className="col col-lg-6 hx-slide-caption">
                                            <h2>We are Qualified & Professional</h2>
                                            <p>Quality Auto Repair WordPress Theme in Envato Market.We offer a variety of Custom services.</p>
                                            <div className="btn-style">
                                                <Link onClick={ClickHandler} to="/about">More About</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                             <HeroContactFrom/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
             </section>
        )
    }
}

export default Hero;