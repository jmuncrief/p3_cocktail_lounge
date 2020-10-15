import React, { useEffect, useState } from 'react';
import RecipeForm from "../components/RecipeForm/RecipeForm";

export default function Members() {
    const [name, setName] = useState("");
    const [faves, setFaves] = useState("");
    const [customs, setCustoms] = useState("");
    const [userId, setUserId] = useState("")

    useEffect(() => {
        fetch("/api/users/members", {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setName(data.name);
            setFaves(data.favorites);
            setCustoms(data.customs);
            setUserId(data.id);
        })
    }, [])

    return (
        <div>
            <h1>logged in as {name} id: {userId}</h1>
            <h3>favorites: {faves}</h3>
            <h3>customs: {customs}</h3>
            <RecipeForm id={userId}/>
        </div>
    )
}
