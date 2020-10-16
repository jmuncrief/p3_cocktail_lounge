import React from 'react'; 
import {ListGroup} from 'react-bootstrap'

import "./FavoritesList.css"

function Fav() {
    return (  
        <>
        <h2 className="favorites-title">My Favorites</h2>
        <ListGroup className="fav-box" defaultActiveKey="#link1">
            <ListGroup.Item className="fav-list" action href="#link1">
                Margarita
            </ListGroup.Item>
            <ListGroup.Item className="fav-list" action href="#link2">
                Old Fashioned
            </ListGroup.Item>
          
        </ListGroup> 
        </>
    );


}

export default Fav;