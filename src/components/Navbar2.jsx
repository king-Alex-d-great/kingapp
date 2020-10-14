import React, { Component } from 'react';

class Navbar2 extends Component {
    state = {  }
    render() { 
        return ( 
            <section className='container'>
                <ul className='nav2lists'>
                    <li><a href=''>HOME</a></li>
                    <li><a href=''>SOFTWARE DEVELOPER</a></li>
                    <li><a href=''>PRODUCT DESIGNERS</a></li>
                    <li><a href=''>APPLY</a></li>
                    <li><a href=''>JOURNAL</a></li>
                    <li><a href=''>FAQ</a></li>
                </ul>
            </section>
         );
    }
}
 
export default Navbar2;