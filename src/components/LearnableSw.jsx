import React, { Component } from 'react';
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import Box from './box';

class LearnableSw extends Component {
    state = {  }
    render() { 
        return (
         <main className='LearnableSw'>
             <Navbar/>
            <Navbar2/>
            <div className='container'>
               <section className='learnablesw'>
                   <h1>The<br/>Learnable<br/>software<br/>Developer</h1>
                   <div className='circleimage'></div>
               </section>
                   <article >
                      
                      <p>Creativity means a lot to us. So we look for people who can think<br/>
                      both logistically and artistically, and who know that limits are<br/>
                      made to be pushed. We value skill and aptitude, but we honor<br/>
                      those who care about working with their team to add the <br/>
                      Genesys flavour to every project.</p>
                      <p>As a developer, being part of a team exposes you to a range of <br/>
                      diverse, like-minded talented people who are sure to make the <br/>
                          experience fun for you. You'll get a shotnat building amazing<br/>
                          things, developing yourself, learning on the job, while <br/>
                          exchanging healthy jokes and having random hangouts once in a <br/>
                          while.</p>
                          <div className=""></div>
                      </article>
                    
              
               <h1>"You are someone people <br/>
               can count on. Everyday, <br/>
               you come in ready to make<br/>
               greatt things happens"</h1>
               <section className='prodexpect'>
                    <Box/>
                    <article className='articlebar'>
                        <h3>We Expect You To..</h3>
                        <p>Play nice with other people.
                        <br/><br/>
                        Be an actively engaging person. That means you are present,<br/>
                        motivated, and social. You know how to communicate effectively<br/>
                        with your teammates.<br/><br/>
                        Love to code. You understand the basics of programming and<br/>
                        object-oriented designs and development.<br/><br/>
                        Have an eye for detail. Your keen observation helps you catch <br/>
                        discrepancies and fix them quickly<br/><br/>
                        Be innate curious. Your love for technology is insatiable, so <br/>
                        you're always researching and experimenting. Learning new <br/>
                        technological skills while on the job is something you look forward to. <br/><br/>
                        Appreciate good design. You waant to make something that <br/>
                        doesnt't just work flawlessly but looks amazing.</p>
                    </article>
                </section>
                <footer/>
            </div>
        </main> );
    }
}
 
export default LearnableSw;