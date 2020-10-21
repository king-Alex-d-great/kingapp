import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Learnablehomepage';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
                <nav className= 'mainNav'>
            
            <ul className='navList'>
                <li className= 'navListitems'> <Link to='/Learnablehomepage'>LEARNABLE</Link> </li>
                <li className= 'navListitems'><Link to='/'>AGORA</Link></li>
                <li className= 'navListitems'><Link to='/'>STARTZONE</Link></li> 
                <li className= 'navListitems'><Link to='/'>ABOUT</Link></li>
                <li className= 'navListitems'><Link to='/'>CONTACT</Link></li>
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