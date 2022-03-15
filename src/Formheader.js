import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { IconButton } from '@material-ui/core'
import "./Formheader.css"
import { useHistory } from 'react-router-dom';

function Formheader() {
    const history = useHistory();

    function navigates() {
        history.push("/response")
    }

    return (
        <div className="form_header">

            <div className="form_header_right">
                <p>Preview</p>
                <IconButton onClick={navigates} target="blank">
                    <AiOutlineEye className="form_header_icon" />
                </IconButton>
            </div>

        </div>
    )
}

export default Formheader
