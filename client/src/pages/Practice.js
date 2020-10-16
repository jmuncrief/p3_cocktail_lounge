import React from 'react'
import Cocktail from "../components/Card/Card"
import { Container, Row, Col } from 'react-bootstrap'
import RecipeForm from '../components/RecipeForm/RecipeForm'
import Search from '../components/Search/Search' 
import Fav from '../components/FavoritesList/FavoritesList'  



export default function Practice() {
    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <RecipeForm />

                    </Col>
                    <Col>
                        <Search />

                    </Col> 
                    <Col>
                        <Fav />

                    </Col>
                </Row>


            </Container> 
        </>


    )
}