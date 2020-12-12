import React, { useState } from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import '../Styles/OPCard.css'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    bg: {
        backgroundColor: '#003864'
    },
    icon: {
        color: '#fff'
    }
}))

const OPCard = ({title, decription, logoUrl, yrList, noOfTimes}) => {
    const [toggle, setToggle] = useState(false);

    const classes = useStyles()

    const onClick = () => {
        setToggle(!toggle)
    }

    return (
        <div className="container">
            <div className="opcard">
                <div className="details_container">
                    <div className="logo_container">
                        <img src={`${logoUrl}`} />
                    </div>
                    <div className="title">Amahi</div>
                    <div className="description">Making Home Networking and Storage Simple</div>
                </div>
                <div className="capsule_container">
                    <div className="capsule">2019</div>
                    <div className="capsule">2018</div>
                    <div className="capsule">2017</div>
                    <div className="capsule">2016</div>
                    <div className="description">No of Times: 7</div>
                </div>
                <div className="bk_container">
                    <div className={`bk ${toggle ? classes.bg : null}`} onClick={onClick}>
                        <BookmarkBorderIcon className={toggle ? classes.icon : null}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OPCard