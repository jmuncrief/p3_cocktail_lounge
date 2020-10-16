import React, { useEffect, useState } from 'react';
import RecipeForm from "../components/RecipeForm/RecipeForm";
import FaveList from "../components/FaveList/FaveList";
import API from "../utils/API"

export default function Members() {
    const [name, setName] = useState("");
    const [faves, setFaves] = useState("");
    const [cust, setCust] = useState([]);
    const [userId, setUserId] = useState("")

    useEffect(() => {
        fetch("/api/users/members", {
            method: "GET"
        })
        .then((res) => res.json())
        .then(({name, favorites, customs, id}) => {
            setName(name);
            setFaves(favorites);
            setCust(customs);
            setUserId(id);
        })
    }, [])
    
    return (
        <div>
            <h1>logged in as {name} id: {userId}</h1>
            <h3>favorites: {faves}</h3>
            <h3>customs: {cust.map(id => <p>{id}</p>)}</h3>
            <RecipeForm/>
            {cust.length > 0 &&
            <FaveList customIds={cust}/>
            }
        </div>
    )
}