import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className= 'mainNav'>
            
            <ul className='navList'>
                <li className= 'navListitems'>LEARNABLE</li>
                 <li className= 'navListitems'>AGORA</li>
                  <li className= 'navListitems'>STARTZONE</li> 
                  <li className= 'navListitems'>ABOUT</li>
                  <li className= 'navListitems'>CONTACT</li>
                  </ul>
                <div className="build">
                    
                    <p>BUILD A PRODUCT WITH</p>
                    <button className="button">DEVSTUDIO</button>
                </div>
            
        </nav>
         );
    }
}
 
export default Navbar;