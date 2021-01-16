import React from 'react'
import {useSelector} from 'react-redux'
import {selectDisplay} from '../store/calcSlice'
import './CalcDisplay.scss'

export default function CalcDisplay() {
    const display = useSelector(selectDisplay);
    return (
        <div className="calcDisplay">
            {display}
        </div>
    )
}
