import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Box from './box';
import Footer from './footer'

class Apply extends Component {
    state = {  }
    render() { 
        return (
            
         <main className='Apply'>
         <Navbar/>
        <Navbar2/>
        <div className='Applycontainer'>
           <section className='learnablesw'>
               <h1>Apply Your<br/>Knowledge</h1>
               <div className='squareimage'></div>
           </section>
               <article >
                  
                  <p>Before you're done with Learnable. you will apply everything<br/>
                  you've learned. You'll be a part of a team made up of 2 designers<br/>
                 and 4 developers. You'll get to work alongside the Gensesys team<br/>
                  on projects and we'll teach you how "the sauce" is made. By <br/>
                 combining technology, design, and great ideas, your team will <br/>
                 have the unique oppourtunity to collaborate with the Genesys<br/>
                 team to bring your own concept to life, from the first pen<br/>
                 sketches to the final functioning product. You'll then get to show<br/>
                 off your special project to everyone.</p>
                 </article>
                            <section className='prodexpect'>
                <Box/>
                    <section className='articlebar'>
                       
                            <h2>How To Get In</h2>
                            <p>We arevery deliberate with our selection process. We are on a <br/>
                            quest to find amazing people who are passionate about learning<br/>
                            and growing their careers in the siftware industry. to this end, <br/>
                            we have designed our selection process to help us get such<br/>
                            people.</p>
                    
                            <h2>Online Application</h2>
                            <p>Introduce yourself to us by fillling out our application form. When<br/>
                            you're done filling out the form, proceed to download our prep<br/>
                            curriculum that contains everything you need to prepare for the<br/>
                            physical and technical assessment </p>
                            <Link to='./Apply'>APPLY HERE</Link>
                    
                            <h2>Phone Call Interviews</h2>
                            <p>We will reach out to you to discuss possible oppourtunities,<br/>
                            ascertain where you fit in with us, and answer any questions you <br/>
                            might have about the program. It's supposed to be a chat,<br/>
                            getting nervous defeats the aim.</p>
                       
                       
                            <h2>Final Assessment</h2>
                            <p>At this stage, we'll get to meet you in person for the first time.<br/>
                            You'll be invited to the hub for a physical assessment that <br/>
                            includes a technical assessment, a psychometric test and a <br/>
                            face-to-face chat with our team.</p>
                        
                        
                            <h2>Get In</h2>
                            <p>If you make it to this stage, you can pack your bags and head<br/>
                            down tothe beautiful city of Enugu. We will join you on your<br/>
                            journey to build that career of your draems and provide all the<br/>
                            help, support and love that we can muster along the way!</p>
                       
                    </section>
                    <div className='weirdbox'></div>
                    <Footer/>
                    </section>
                    </div>
            </main>
          );
    }
}
 
export default Apply;