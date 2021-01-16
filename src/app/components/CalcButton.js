import React from 'react'
import {useDispatch} from 'react-redux'
import {updateDisplay} from '../store/calcSlice';
import './CalcButton.scss'

export default function CalcButton(props) {
    const dispatch = useDispatch();
    return (
        <button className={`button ${props.buttonType}`} 
        onClick={() => dispatch(updateDisplay(props.text))}>{props.text}</button>
    )
}
