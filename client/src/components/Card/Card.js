import React from 'react'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap';
import "./Card.css"


function Cocktail(props) {
    return (
        <>
            <Card border="danger" style={{ width: '18rem' }} className="cocktail" drinkID={props.ID} >
                <Card.Body>
                    <Card.Title className="title">{props.name}</Card.Title>

                </Card.Body>
                <Card.Img variant="bottom" className="responsive" src={props.img} alt="cocktail-image" />

            </Card>

        </>



    )
}

export default Cocktail;