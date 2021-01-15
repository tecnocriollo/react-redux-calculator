import React from 'react'
import CalcButton from './CalcButton'
import CalcButtons from './CalcButtons'
import CalcDisplay from './CalcDisplay'
import './Calculator.scss'
export default function Calculator() {
    return (
        <div className="calculator">
            <CalcDisplay/>
            <CalcButtons/>
        </div>
    )
}
