import React, { Component } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Box from './box'

class LearnablePd extends Component {
    state = {  }
    render() { 
        return (         
            <main className='LearnablePd'>
            <Navbar/>
           <Navbar2/>
           <div className='container'>
              <section className='learnablesw'>
                  <h1>The<br/>Learnable<br/>Product<br/>Designer</h1>
                  <div className='circleimage'></div>
              </section>
                  <article>
                     
                     <p>At Genesys, you'll be exposed to every discipline in our creative <br/>
                     process - UX, UI, interactive design, and copywriting. You'll be<br/>
                     part of a dynamic team that's made up of like-minded, talented<br/>
                     people.  You'll work hard with them to create things that will <br/>
                     amaze everyone everywhere. </p>
                     <p>In addition to your team projects, you'll be lending a hand to the <br/>
                     creative team. Participating in brainstorm sessions, building<br/>
                     winning pitches, preparing assets, and design scriptures for <br/>
                     productions, you'll be in the thick of it all.</p>
                     <p>Oh, and you'll make amazing friends while you're at it!</p>

                     </article>
                   
             
              <h1>"The greats weren't great <br/>
              because at birth they could <br/>
             paint. The greats were <br/>
              great because they painted<br/>
              a lot"<br/>
              - Macklemore</h1>
              <section className='prodexpect'>
                   <Box/>
                   <article className='articlebar'>
                       <h3>We Expect You To...</h3>
                       <p>Play nice with other people </p>
                        <p>Be an actively engaging person. That means you are present,<br/>
                       motivated, and social.</p>
                      <p> Understand how to use the Figma design software.</p>
                       <p>Be able to create initial design layouts with confidence and <br/>
                       know-how to effectively communicate concepts to everyone on <br/>
                       your team</p>
                       <p>Have a basic understanding of design principles and theories. <br/>
                       To have creative courage. This is a tough industry, only th brave <br/>
                      and sturdy remain  </p>
                      <p> Be prepared to defend ypur decisions and take constructive<br/>
                      criticism.</p>
                      <p><span className='smalltext'>To us, beauty without substance has no value. At Genesys, design thinking and <br/>
                      execution are equally important. So we're constantly on the lookiut for not only the<br/>
                      how but also the why.</span></p>
                   </article>
               </section>
               <footer/>
           </div>
       </main> );
    }
}
 
export default LearnablePd;