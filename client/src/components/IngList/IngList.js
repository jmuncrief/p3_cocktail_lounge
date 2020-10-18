import React from 'react'
import sanitizeIngredients from "../../utils/sanitizeIngredients"

export default function IngList(props) {
    
    function listMaker(){

        let obj = sanitizeIngredients(props.data)

        let key
        let txt
        let list = []
    
        for (key in obj){
            txt = obj[key];
            list.push(<li> {key} - {txt}</li>);
        }
    
        return list;
    }

    return(

                <ul>
                    { listMaker() }
                </ul>
    )
}