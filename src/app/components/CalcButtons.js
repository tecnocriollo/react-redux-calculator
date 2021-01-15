import React from 'react'
import './CalcButtons.scss'
import CalcButton from './CalcButton'

export default function CalcButtons() {
    return (
        <div class="calcButtons">
           <CalcButton buttonType="button-gray" text="1"></CalcButton> 
           <CalcButton buttonType="button-gray" text="2"></CalcButton> 
        </div>
    )
}

