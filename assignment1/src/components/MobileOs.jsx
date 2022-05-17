import React from "react";
import Ul from "./ul.jsx"

let MobileOs=()=>
{
    let Mos=[
        {mos:'Android'},
        {mos:'Blackberry'},
        {mos:'iPhone'},
        {mos:'Windows Phone'}
    ]
    let MM=[
        {mos:'Samsung'},
        {mos:'HTC'},
        {mos:'Micromax'},
        {mos:'Apple'}
    ]
    
    return (
        <>
            <h2>Mobile Operating System</h2>
            {
                Mos.map((el)=>
                (  
                    <div>
                     <Ul{...el}/>
                    </div> 
                )
                )
            }
            <h2>Mobile Mannufactures</h2>
            {
                MM.map((el)=>
                (
                    <div>
                        <Ul{...el}/>
                    </div>
                )
                )
            }
        </>
    )
}



export default MobileOs;