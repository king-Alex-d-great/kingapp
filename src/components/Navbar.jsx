import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <ul>
                    <li>learnable</li>
                     <li>agora</li>
                      <li>startzone</li> 
                      <li>about</li>
                      <li>contact</li>
                    <div className="build">
                        <p>build a product with</p>
                        <button className="button">DEVSTUDIO</button>
                    </div>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;