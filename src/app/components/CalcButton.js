import React from 'react'
import './CalcButton.scss'

export default function CalcButton(props) {
    return (
        <button className={`button ${props.buttonType}`}>{props.text}</button>
    )
}
