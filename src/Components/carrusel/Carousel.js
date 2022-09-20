import React, { Component } from "react";
import Slider from "react-slick";
import foto1 from "D:/SEPTIEMBRE/Proyecto grupal/proyecto-grupal/src/Assets/carrusel1.jpeg"
import foto2 from "D:/SEPTIEMBRE/Proyecto grupal/proyecto-grupal/src/Assets/carrusel2.jpeg"
import foto3 from "D:/SEPTIEMBRE/Proyecto grupal/proyecto-grupal/src/Assets/carrusel3.jpeg"
import './carrusel.css'

export default class Carrusel extends Component {
    render() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
    return (
        <div>
        <Slider {...settings} className='carrusel-container'>
            <div className='carrusel-item'>
                <h3>Visita a Trust</h3>
                <img
                    className="carrusel-img"
                    src={foto1}
                    alt="First slide"
                />
            </div>
            <div className='carrusel-item'>
                <h3>Cumpleaños de Jona</h3>
                <img
                    className="carrusel-img"
                    src={foto2}
                    alt="First slide"
                />
            </div>
            <div className='carrusel-item'>
                <h3>Pizzas caseras</h3>
                <img
                    className="carrusel-img"
                    src={foto3}
                    alt="First slide"
                />
            </div>
        </Slider>
        </div>
    );
    }
}