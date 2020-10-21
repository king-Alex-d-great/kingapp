import React, { Component } from 'react';
import Footer from './footer';
import { Link } from "react-router-dom";

class Learnablehomepage extends Component {
    state = {  }
    render() { 
        return ( 
            <section className='Learnablehomepage'>
                <div className='brochure'>
                    <div className='brochuretext1'>
                        <h4 className='bigtext'>Coming Soon: Learnable '20</h4>
                     <p >We've started taking in application for the next batch of learnable<br/>
                        interns. Applications are on till the 21st of February.</p>
                        
                    </div>
                    <div className='click'>
                        
                        <p >Click to download...</p>
                      <h4 className='bigtext'>  <Link to='./Learnablehomepage'>Learnable '20 Brochure</Link></h4>
                    </div>
                </div>
  <section>
   <h1 className='section1'> Everything<br/>is Learnable</h1>
                        <p>Learnable is the perfect product<br/>
                        development internship program brought to<br/>
                        you by Genesys</p>
                        <div className='circles'>
<div className='circleimage'></div>
                        <div className='circleimage'></div>
                        
                        </div>
                        </section>
                        <div className='image1'>
<icon> arrow </icon>
<span><figure className='iconbox'></figure>
</span>
</div>
                       
            <div className='learnablenumbers'>
                <div><h4 className='topnumber'>305</h4><p>Young software<br/>Developers Trained</p></div>
                <div><h4 className='topnumber'>2100</h4><p>Tech Enthusiasts</p></div>
                <div><h4 className='topnumber'>8</h4><p>StartUps Incubated</p></div>
                <div><h4 className='topnumber'>250</h4><p>Small Businesses<br/>Supported</p></div>
            </div>

            <div className='mainboxes'>
            
            <text>
            <h3>We Make People Great</h3>
            <p>As part of our calculated efforts to contribute to the emerging<br/>
            knowledge and skills driven economy of Nigeria, Learnable is a <br/>
            6-month product development training program with an emphasis <br/>
            on software programming and product design. It is for outstanding<br/>
            young individuals who are passionate about building a career in the<br/>
             software industry</p>
             <p>We primarily educate and groom software developers and<br/>
             designers, preparing them for the industry</p>
            </text><figure className='circleimage'>the box</figure>
            </div>

            <div className='mainboxes'>
<figure className='mainboxfigure'>the box</figure>
<text>
<h3>An unusual Learning <br/> Experience</h3>
<p>At Genesys, we believe in the learning processes as much as we believe in the <br/>
results. By applying a combination of active and social learning methodologies,<br/>
we create an environment that involves the learner in the learning process<br/>
while providingg avenue for collaboration and peer-to-peer mentorship.
</p>
<p>our methods over the years have helped us discover ways to take education<br/>
out of the classroom. We introduce our interns to learning by experimentation<br/>
and problem-solving. To us, every task is an opportunity to learn.</p>
</text>
</div>

<section className='multicolor'>
   <div className='multicolortext'>
        <p className='smalltext'>FOR DEVELOPERS</p>
        <h2>Learn To Build Software<br/>
        The Right Way</h2>
        <p>We love to build stufff. Really awesome stuff. That's why we <br/>
        have developed a learning program that will empoer you to<br/>
        create amazing software the right way.</p>
        <p>We believe in learning through experimentation. Our aim is to<br/>
        nurture and grow bright young minds from the get-go because <br/>
        thats's how our industry will thrive.</p>
        <Link to='./LearnableSw'>LEARN MORE</Link>
    </div>
    <div className='multicolorboxescontainer'>
    <div className='multicolorboxes'>
        <div className='multicolorbox'>
            <h2>Program With<br/> Javascript</h2>
        </div>
        <div className='multicolorbox'>
            <h2>Version Control<br/>With Git</h2>
        </div>
        <div className='multicolorbox'>
            <h2>Web <br/> Development <br/> With React</h2>
        </div>
        <div className='multicolorbox'>
            <h2>Building APIs<br/>With NodeJS</h2>
        </div>
        <div className='multicolorbox'>
            <h2>Managing Data<br/> With MongoDB</h2>
        </div>
        <div className='multicolorbox'>
            <h2>Deploying With <br/>Heroku</h2>
        </div>
    </div>
    </div>
</section>


<section className='multicolor'>
     
    <div className='multicolorboxescontainer'>
    <div className='multicolorboxes'>
        <div className='multicolorbox'>
            <h2>Program With<br/> Javascript</h2>
        </div>
        <div className='multicolorbox'>
            <h2>Version Control<br/>With Git</h2>
        </div>
        <div className='multicolorbox'>
            <h2>Web <br/> Development <br/> With React</h2>
        </div>
        <div className='multicolorbox'>
            <h2>Building APIs<br/>With NodeJS</h2>
        </div>
        <div className='multicolorbox'>
            <h2>Managing Data<br/> With MongoDB</h2>
        </div>
        <div className='multicolorbox'>
            <h2>Deploying With <br/>Heroku</h2>
        </div>
    </div>
    </div>
    <div className='multicolortext'>
        <p className='smalltext'>FOR DEVELOPERS</p>
        <h2>Learn To Build Software<br/>
        The Right Way</h2>
        <p>We love to build stufff. Really awesome stuff. That's why we <br/>
        have developed a learning program that will empoer you to<br/>
        create amazing software the right way.</p>
        <p>We believe in learning through experimentation. Our aim is to<br/>
        nurture and grow bright young minds from the get-go because <br/>
        thats's how our industry will thrive.</p>
        <Link to='./LearnablePd'>LEARN MORE</Link>
    </div>
</section>
 <div className='mainboxes'>
            
            <text>
            <h3>Who Is Eligible</h3>
            <p>To be a participant of learnable, you need to be a young and <br/>
            passionate person interested in launching a super tech career. You<br/>
            will need to have foundational knowledge in whatever learning path <br/>
            you are applying for and be available for the six month duration of <br/>
            the program</p>
            <p>To become a part of the Genesys family, you must express some of <br/>
            the qualities we consider important. You are someone that takes <br/>
            responsibilities and initiatives. You will also express the ability to<br/>
            produce quality stuff in good time with high consistency.</p>
        
            </text>
            <figure className='mainboxfigure'>the box</figure>
            </div>
             <div className='mainboxes'>
            <figure className='mainboxfigure'>the box</figure>
            <text>
            <h3>Our Culture</h3>
            <p>Our culture are the unspoken thie us who we are at<br/>
            Genesys. To become one of us, you need to be like the rest of us.<br/>
            We believe that excellence  is a culture, and we are commited to a<br/>
            philosophy of consistent improvement in everything we do. We are <br/>
            passionate, candid and we trust in the power of collaboration.         </p>
            </text>
            </div>
             <div className='mainboxes'>
           
            <text>
            <h3>Learning Can Be Fun</h3>
            <p>We believe learning should be a fun experience. For this reason, we <br/>
            don't do all the learning in the classroom.
            </p>
            <p>The learnable experience can not be complete without the bag of <br/>
            fun times which you'll have. To us, every task is an opportunity to<br/>
            have some fun. But we do do well to throwto throw in a good number of <br/>
            activities to add to thisto thisto. You will find yourself partaking in a lot of <br/>
            healthy activities such as cooking, sports, music hangouts, and<br/>
            even random dates</p>
            <p>Trust us when we say we know to have fun.</p>
            </text>
             <figure className='mainboxfigure'>the box</figure>
            </div>
             <div className='mainboxes'>
            <figure className='mainboxfigure'>the box</figure>
            <text>
            <h3 className='experttext'>Learn from the <br/>Experts</h3>
            <p>As a learnable intern, you will be learning from the best <br/>
            software developers and product designers our industry has to <br/>
            offer. You will spend the first 3 months in the classroom with <br/>
            industry experts who have a wealth of experience from<br/>
            developing amazing products for various customers in our <br/>
            industry
            </p>
            </text>
            </div>
             <div className='mainboxes'>
            
            <text>
            <h3>Learning Doesn't Always Have<br/>
            To Be In The Classroom </h3>
            <p>We have designed other learning activities that aren't <br/>
            classroom based. You will learn how to be better person, how to <br/>
            have good conversation, how to work better with people and most<br/>
            importantly, how to lead other people. Hey! We'll even teach you <br/>
            how to run a business during the Learnable Business Sessions. 
            </p>
            <Link to='./LearnablePd'>LEARN MORE</Link>
            </text>
            <figure className='mainboxfigure'>the box</figure>
            </div>
             <div className='mainboxes'>
            <figure className='mainboxfigure'>the box</figure>
            <text>
            <h3>Learnable</h3>
            <p>Before you're done with Learnable. you will apply everything
                  you've <br/>learned.You'll be a part of a team made up of 2 designers<br/>
                 and 4 <br/> developers. You'll get to work alongside the Gensesys team
                  on <br/> projects and we'll teach you how "the sauce" is made. By
                 combining <br/>technology, design, and great ideas, your team will 
                 have the unique <br/> oppourtunity to collaborate with the Genesys
                 team to bring your own <br/> concept to life, from the first pen
                 sketches to the final functioning<br/> product. You'll then get to show
                 off your special project to everyone.
            </p>
            <Link to='./Learnablehomepage'>GET STARTED</Link>
            </text>
            </div>
            <section className='homefaq'>
            <section className='learnablesw'>
               <h3>FAQ</h3>
                         </section>
                    <section className='links'>
                        {/* loop could shorten this code */}
                    <div> <Link to='./Faq'> <h4>How many people can attend a course?</h4> </Link></div> 
                    <div> <Link to='./Faq'> <h4>What's the learning experience like </h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Who are the coaches?</h4></Link></div> 
                    <div> <Link to='./Faq'> <h4>How long in advance should we book?</h4></Link></div>
                    <div> <Link to='./Faq'> <h4>Can you customize your courses?</h4></Link></div>
            </section>
            </section>
             <section className='learnablesw'>
               <h3>JOURNAL</h3>
               <Link to='./Journal'>VIEW ALL</Link>
                         </section>
                <section className='journalbottom'>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                                <Link to='./Journal'>INSPIRATION</Link>
                                <h4>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h4>
                                <p className='smalltext'>Ogubuike Alex, Oct 15, 2020</p>
                            </div>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                                <Link to='./Journal'>INSPIRATION</Link>
                                <h4>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h4>
                                <p className='smalltext'>Ogubuike Alex, Oct 15, 2020</p>
                            </div>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                                <Link to='./Journal'>INSPIRATION</Link>
                                <h4>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h4>
                                <p className='smalltext'>Ogubuike Alex, Oct 15, 2020</p>
                            </div>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                               <Link to='./Journal'>INSPIRATION</Link>
                                <h4>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h4>
                                <p className='smalltext'>Ogubuike Alex, Oct 15, 2020</p>
                            </div>
                        
                        
            </section>
            <Footer />
            </section>
         );
    }
}
 
export default Learnablehomepage;