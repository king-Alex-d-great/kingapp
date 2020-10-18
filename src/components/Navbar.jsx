import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Learnablehomepage from './Learnablehomepage'

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
                <nav className= 'mainNav'>
            
            <ul className='navList'>
                <li className= 'navListitems'> <Link to='.\Learnablehomepage'> LEARNABLE</Link> </li>
                <li className= 'navListitems'>AGORA</li>
                <li className= 'navListitems'>STARTZONE</li> 
                <li className= 'navListitems'>ABOUT</li>
                <li className= 'navListitems'>CONTACT</li>
                  </ul>
                <div className="build">
                    
                   <span className='buildproduct'>BUILD A PRODUCT WITH</span>
                    <button className="button">DEVSTUDIO</button>
                </div>
        </nav>
         );
    }
}
 
export default Navbar;