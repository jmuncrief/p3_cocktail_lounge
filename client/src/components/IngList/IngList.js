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
            if(txt){
            list.push(<li> {key} - {txt}</li>);
            } else {
                list.push(<li> {key} </li>)
            }
        }
    
        return list;
    }

    return(

                <ul>
                    { listMaker() }
                </ul>
    )
}