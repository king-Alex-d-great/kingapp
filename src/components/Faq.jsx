import React, { Component } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import {Link} from "react-router-dom";

class Faq extends Component {
    state = {  }
    render() { 
        return ( 
            <main className='Faq'>
                <Navbar/>
        <Navbar2/>
        <div className='container'>
           <section className='learnablesw'>
               <h1>FAQ</h1>
               <div className='circleimage'></div>
           </section>
                    <section className='links'>
                        {/* loop could shorten this code */}
                    <div> <Link to='./Faq'> <h4>How many people can attend a course?</h4></Link></div> 
                    <div> <Link to='./Faq'> <h4>What's the learning experience like </h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Who are the coaches?</h4></Link></div> 
                    <div> <Link to='./Faq'> <h4>How long in advance should we book?</h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link></div>
                        
                    </section>
                    <footer />
                </div>
            </main>
         );
    }
}
 
export default Faq;