import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from '../Search';
//import { useHistory } from "react-router-dom";

function Banner() {
  //  const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>Let your Harvest Pay you the way you Deserve</h1>
                <h5>
                    Let us help find the right market for your goods
                </h5>

                <Button variant = 'outlined'>Enroll as Farmer</Button>
                
            </div>
        </div>
    )
}

export default Banner;