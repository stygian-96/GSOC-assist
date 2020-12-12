import React from 'react';
import { Button } from '@material-ui/core';

const SearchField = () => {
    return(
        <div className="search-field-wrapper">
            <div className="search-field">
                <input type="text" placeholder="Search" />
            </div>
            <div className="sort-buttons">
                <div>
                    <Button variant="outlined">Year</Button>
                </div>
                <div>
                    <Button variant="outlined">A-Z </Button>
                </div>
            </div>
        </div>
    )
} 

export default SearchField 