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
           <section className='learnablesw'>
               <h1>Faq</h1>
               <div className='circleimage'></div>
           </section>
                    <section className='links'>
                        {/* loop could shorten this code */}
                        <h4><a href=''>How many courses</a</h4>
                        <h4><a href=''> </a></h4>
                        <h4><a href=''>eo</a></h4>
                        <h4><a href=''></a></h4>
                        <h4><a href=''></a></h4>
                        <h4><a href=''></a></h4>
                        <h4><a href=''></a></h4>
                        <h4><a href=''></a></h4>
                        <h4><a href=''></a></h4>
                        <h4><a href=''></a></h4>
                        <h4><a href=''></a></h4>
                        <h4><a href=''></a></h4>
                        <h4><a href=''></a></h4>
                        <h4><a href=''></a></h4>
                        <h4><a href=''></a></h4>
                        
                    </section>
                    <footer />
                </div>
            </main>
         );
    }
}
 
export default Faq;