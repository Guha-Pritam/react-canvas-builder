import React, { useState, useEffect } from 'react'
// import { IconButton } from '@material-ui/core'
import "./Templates.css"
import { useHistory } from "react-router-dom";
import uuid from "react-uuid";
import axios from "axios";

function Templates() {
    const history = useHistory();

    function createform() {


        var create_form_id = uuid();
        console.log(create_form_id)

        history.push("/form/" + create_form_id)
        var questions_list = [{ questionText: "Question", questionType: "radio", options: [{ optionText: "Option 1" }], open: true, required: false }]

        axios.post(`http://localhost:9000/add_questions/${create_form_id}`, {
            "document_name": "untitled_form",
            "doc_desc": "Add Description",
            "questions": questions_list,



        })
    }
    return (
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <p style={{ color: "#202124", fontSize: "16px" }}>Start a new form</p>
                </div>

            </div>
            <div className="template_body">
                <div className="card" onClick={createform}>
                    <img src='https://res.cloudinary.com/dig3gb1rw/image/upload/v1640496911/Paper_grebz3.png' className="card_image" style={{}} />
                    <p className="title" >Press</p>
                </div>
            </div>
        </div>
    )
}

export default Templates
