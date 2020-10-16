import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button, Container } from 'react-bootstrap';
import "./Card.css"


function Cocktail(props) {
    return (
        <>
            <Card border="danger" style={{ width: '18rem' }} className="cocktail" drinkID={props.ID} >
                <Card.Body>
                    <Card.Title className="title">{props.name}</Card.Title>

                </Card.Body>
                <Card.Img variant="bottom" className="responsive" src={props.img} alt="cocktail-image" />

                <Button key={props.ID} className="search-btn" onClick={props.idSearch} variant="outline-success">See Recipe</Button>

            </Card>

        </>

    )
}

export default Cocktail;