import React from 'react'
import '../Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function Header() {
    return (
        <div className='header'>
                <img
                    className="header_logo"
                    src="./images/Agitom_logoo.png"
                    alt="Agitom Logo"
                />
           
            <div className='header_search'>
                <input className="header_searchInput" type="text" />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className='header_right'>
                <p>Join Us</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header