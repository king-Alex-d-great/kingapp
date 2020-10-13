import React, { Component } from 'react';
import { createContext } from 'react';
class lister extends Component {
    state = { 
        test: ['amaka','nnem', 'odilo']
     } 
    render() { 
        return (  
            <ul>
                {this.state.test.map(names => (`<li> ${names} </li`))}
            </ul>
        );
    } 
}
 
export default lister; 