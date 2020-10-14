import React, { Component } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

class Faq extends Component {
    state = {  }
    render() { 
        return ( 
            <main className='Faq'>
                <Navbar/>
                <Navbar2/>
                <div className='container'>
                    <section className='faqtop'>
                        <h1> FAQ</h1>
                        <div>box</div>
                    </section>
                    <section className='links'>
                        {/* loop could shorten this code */}
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        <p><a href=''></a></p>
                        
                    </section>
                    <footer />
                </div>
            </main>
         );
    }
}
 
export default Faq;