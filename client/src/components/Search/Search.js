import React from "react"; 
import { Button, FormControl, Form } from "react-bootstrap"; 
import "./Search.css"

function Search() {
    return (
        <div>
            <Form inline className="searchComp">

                <div key="default-checkbox" className="mb-3 checkboxes">
                    <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label="Search by Name"
                    />
                    <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label="Search by Ingredient"
                    />
                </div>  
                <div> 
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </div>

            </Form>
        </div> 
    )

}

export default Search