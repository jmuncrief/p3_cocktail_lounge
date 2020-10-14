import React from "react"; 
import { Button, FormControl, Form } from "react-bootstrap"; 
import "./Search.css"

function Search() {
    return (
        <div>
            <Form inline>

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
                <FormControl type="text" placeholder="Search" className="mr-sm-2 search" />
                <Button variant="outline-success">Search</Button>

            </Form>
        </div> 
    )

}

export default Search