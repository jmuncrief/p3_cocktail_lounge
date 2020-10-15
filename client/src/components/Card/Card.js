import React from 'react'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap';
import "./Card.css"


function Cocktail() {
    return (
        <>
            <Card border="danger" style={{ borderWidth: '3px', width: '18rem' }} className="cocktail" >
                <Card.Body>
                    <Card.Title className="title">Margarita</Card.Title>

                </Card.Body>
                <Card.Img variant="bottom" className="responsive"  src="http://placekitten.com/100/100" alt="cocktail-image"/>

            </Card>

        </>



    )
}

export default Cocktail;