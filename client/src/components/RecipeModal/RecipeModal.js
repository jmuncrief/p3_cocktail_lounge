import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from "../../utils/API"
import sanitizeIngredients from "../../utils/sanitizeIngredients"

function RecipeModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function addToFaves(data) {
        function isAlc() {
            if (data.strAlcoholic === "Alcoholic") {
                return (true)
            } else {
                return (false)
            }
        }

        API.addFavorite({
            name: data.strDrink,
            alcoholic: isAlc(),
            imageURL: data.strDrinkThumb,
            instructions: data.strInstructions,
            ingredients: sanitizeIngredients(data),
        }).then((result) => {
            console.log(result)
        })
    }


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.data.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.data.strInstructions}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={() => addToFaves(props.data)}>
                        Add to Favorites (!logic)
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RecipeModal;