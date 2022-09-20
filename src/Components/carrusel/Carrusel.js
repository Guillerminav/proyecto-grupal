import foto1 from "D:/SEPTIEMBRE/Proyecto grupal/proyecto-grupal/src/Assets/carrusel1.jpeg"
import foto2 from "D:/SEPTIEMBRE/Proyecto grupal/proyecto-grupal/src/Assets/carrusel2.jpeg"
import foto3 from "D:/SEPTIEMBRE/Proyecto grupal/proyecto-grupal/src/Assets/carrusel3.jpeg"
import './carrusel.css'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carrusel-container">
        <Carousel.Item className="carrusel-item">
        <img
            className="d-block w-100 carrusel-img"
            src={foto1}
            alt="First slide"
        />
        <Carousel.Caption>
            <p>Visita a oficinas de Trust</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carrusel-item">
        <img
            className="d-block w-100 carrusel-img"
            src={foto2}
            alt="Second slide"
        />

        <Carousel.Caption>
            <p>Cumpleaños de Jona</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carrusel-item">
        <img
            className="d-block w-100 carrusel-img"
            src={foto3}
            alt="Third slide"
        />

        <Carousel.Caption>
            <p>Pizzas caseras en casa</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export default ControlledCarousel 