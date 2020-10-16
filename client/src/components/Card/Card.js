import React from 'react'
import Card from 'react-bootstrap/Card'
import { Container, CardDeck } from 'react-bootstrap';
import "./Card.css"


function Cocktail(props) {
    return (
        <>
            <CardDeck style={{display: 'flex', flexDirection: 'row'}} >


                <Card border="danger" style={{ width: '18rem', flex: 1 }} className="cocktail" drinkID={props.ID} >
                    {/* <Card.Body> */}
                        <Card.Title className="title">{props.name}</Card.Title>

                    {/* </Card.Body> */}
                    <Card.Img variant="bottom" className="responsive" src={props.img} alt="cocktail-image" />

                </Card>
            </CardDeck>



        </>

    )
}

export default Cocktail;