import {  IconButton } from '@material-ui/core'
import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <div className="header">

            <div className="header_info">
             

             <div className="info">
                 Canvas Builder
             </div>
            </div>
            <div className="header_search">
               <IconButton><SearchIcon /></IconButton>
                <input type="text" placeholder="Search"/>
            </div>   
            <div className="header_right">
                <IconButton style={{margin:"0px"}}>
                </IconButton>
            </div>          

        </div>
    )
}

export default Header
