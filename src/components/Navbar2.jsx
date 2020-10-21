import React, { Component } from 'react';
import{Link} from "react-router-dom";

class Navbar2 extends Component {
    state = {  }
    render() { 
        return ( 
            <section className='container'>
                <ul className='nav2lists'>
                    <li><Link to='./'>HOME</Link></li>
                    <li><Link to='./LearnableSw'>SOFTWARE DEVELOPER</Link></li>
                    <li><Link to='./LearnablePd'>PRODUCT DESIGNERS</Link></li>
                    <li><Link to='./Apply'>APPLY</Link></li>
                    <li><Link to='./Journal'>JOURNAL</Link></li>
                    <li><Link to='./Faq'>FAQ</Link></li>
                </ul>
            </section>
         );
    }
}
 
export default Navbar2;