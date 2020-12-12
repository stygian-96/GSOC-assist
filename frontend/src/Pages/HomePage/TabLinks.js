import React from 'react';
import BusinessIcon from '@material-ui/icons/Business';
import MemoryIcon from '@material-ui/icons/Memory';

const TabLinks = () => {
    return (
        <div className="tab-links-wrapper">
            <div>
                <a href="#">
                    <i><BusinessIcon /></i>
                    <span>ORGANISATIONS</span>
                </a>
            </div>
            <div>
                <a href="#1">
                    <i><MemoryIcon /></i>
                    <span>PROJECTS</span>    
                </a>
            </div>
        </div>
    )
}

export default TabLinks