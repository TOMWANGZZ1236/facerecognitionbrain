import React from "react";
import {Tilt} from 'react-tilt'
import './Logo.css'
import brain from './Logo.png'
const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className = "br2 shadow-2" options={{max: 35}} style={{ height: 250, width: 250 }}>
                <img alt = "Logo" src = {brain}/>
            </Tilt>
        </div>
    
    );
}


export default Logo