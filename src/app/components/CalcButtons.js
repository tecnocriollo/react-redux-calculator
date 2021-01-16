import React from 'react'
import './CalcButtons.scss'
import CalcButton from './CalcButton'
import {useDispatch} from 'react-redux'
import { backSpace, clearDisplay,  calcValue } from '../store/calcSlice';

export default function CalcButtons() {
    const dispatch = useDispatch();
    return (
        <div className="calcButtons">
            <div style={{display:"block"}}>
           <CalcButton buttonType="button-gray" text="1"></CalcButton> 
           <CalcButton buttonType="button-gray" text="2"></CalcButton> 
           <CalcButton buttonType="button-gray" text="3"></CalcButton>            
           <CalcButton buttonType="button-lightblue" text="+"></CalcButton>            
           <CalcButton buttonType="button-lightblue" text="-"></CalcButton>            
           </div>
           <div style={{display:"block"}}>
           <CalcButton buttonType="button-gray" text="4"></CalcButton> 
           <CalcButton buttonType="button-gray" text="5"></CalcButton> 
           <CalcButton buttonType="button-gray" text="6"></CalcButton>
           <CalcButton buttonType="button-lightblue" text="*"></CalcButton>            
           <CalcButton buttonType="button-lightblue" text="/"></CalcButton>            
           </div>
           <div style={{display:"block"}}>
           <CalcButton buttonType="button-gray" text="7"></CalcButton> 
           <CalcButton buttonType="button-gray" text="8"></CalcButton> 
           <CalcButton buttonType="button-gray" text="9"></CalcButton>            
           <button 
            style={{backgroundColor:"yellow", fontWeight:"bold"}}
            onClick={() => dispatch(clearDisplay())}>C</button>
           <button 
            style={{backgroundColor:"green", fontWeight:"bold", color:"white"}}
            onClick={() => dispatch(backSpace())}>←</button>
           </div>
           <div style={{display:"block"}}>
               <button 
               style={{backgroundColor:"red", color:"white"}}
               onClick={() => dispatch(calcValue())}>Calc!!</button>
            </div>
        </div>
    )
}

