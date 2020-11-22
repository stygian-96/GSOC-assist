import React, {useState} from 'react'
import '../Styles/HomePage.css'

function DropDown() {
    const [year, setYear] = useState('2019')
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    const changeYear = (e) => {
        setShow(false)
        setYear(e.target.textContent)
    }

    return (
        <div className = "dropdown">
            <div className = "dropdown__selected" onClick = {handleClick}>{year}</div>
            {show && 
            <div className = "dropdown__list">
                <div onClick = {changeYear}>2019</div>
                <div onClick = {changeYear}>2018</div>
                <div onClick = {changeYear}>2017</div>
                <div onClick = {changeYear}>2016</div>
                <div onClick = {changeYear}>2015</div>
                <div onClick = {changeYear}>2014</div>
                <div onClick = {changeYear}>2013</div>
                <div onClick = {changeYear}>2012</div>
                <div onClick = {changeYear}>2011</div>
                <div onClick = {changeYear}>2010</div>
                <div onClick = {changeYear}>2009</div>
            </div>}
        </div>
    )
}

export default DropDown
