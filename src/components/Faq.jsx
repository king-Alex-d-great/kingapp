import React, { Component } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import {Link} from "react-router-dom";
import Footer from './footer';
import {FaAngleDown} from 'react-icons/fa';

class Faq extends Component {
    state = {  }
    render() { 
        return ( 
            <main className='Faq'>
                <Navbar/>
        <Navbar2/>
        <div className='Faqcontainer'>
           <section className='learnablesw'>
               <h1>FAQ</h1>
               <div className='squareimage'></div>
           </section>
                    <section className='links'>
                        {/* loop could shorten this code */}
                   <div className='faqlinks'> <Link to='./Faq'> <h4>How many people can attend a course? </h4></Link><div><FaAngleDown /></div></div> 
                   <div className='faqlinks'> <Link to='./Faq'> <h4>What's the learning experience like?</h4></Link><div><FaAngleDown /></div></div>
                   <div className='faqlinks'> <Link to='./Faq'> <h4>Who are the coaches?</h4></Link><div><FaAngleDown /></div></div>
                   <div className='faqlinks'> <Link to='./Faq'> <h4>How long in advance should we book?</h4></Link><div><FaAngleDown /></div></div>
                   <div className='faqlinks'> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link><div><FaAngleDown /></div></div>
                   <div className='faqlinks'> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link><div><FaAngleDown /></div></div>
                    <div className='faqlinks'> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link><div><FaAngleDown /></div></div>
                    <div className='faqlinks'> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link><div><FaAngleDown /></div></div>
                    <div className='faqlinks'> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link><div><FaAngleDown /></div></div>
                    <div className='faqlinks'> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link><div><FaAngleDown /></div></div>
                   <div className='faqlinks'> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link><div><FaAngleDown /></div></div>
                   <div className='faqlinks'> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link><div><FaAngleDown /></div></div>
                   <div className='faqlinks'> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link><div><FaAngleDown /></div></div>
                   <div className='faqlinks'> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link><div><FaAngleDown /></div></div>
                   <div className='faqlinks'> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link><div><FaAngleDown /></div></div>
                        
                    </section>
                    <Footer />
                </div>
            </main>
         );
    }
}
 
export default Faq;