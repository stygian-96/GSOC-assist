import React from 'react'
import '../Styles/WLCard.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function WLCard() {
    return (
        <div className="wlcard">
            <div className="wlcard__details">
                <div className="wlcard__details--title">Amahi</div>
                <div>No of times: 3</div>
            </div>
            <div className="wlcard__button">
                <DeleteOutlineIcon />
            </div>
        </div>
    )
}

export default WLCard
