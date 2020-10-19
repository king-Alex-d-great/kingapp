import React, { Component } from 'react';
import {
    FaTwitter, FaFacebook, FaViber, FaLinkedin, FaYoutube, FaInstagram
} from 'react-icons/fa'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Footer extends Component {
    state = {  }
    render() { 
        return (
             <section className="Footer">
                 <div class='container'>
                 <div className='image1'>
                    <FontAwesomeIcon icon='Arrow-up' />
                    <div className='iconbox'>
                        <h4>Stay Up To Date On What We<br/>
                            Are Doing And New Learning<br/>
                            Opportunities
                        </h4>
                        <div className='footersmall'>
                        <div className='footerEmailpolicy'>
                            <p>YOUR EMAIL</p>
                            <hr/>
                            <p>View Privacy Policy</p>
                        </div>
                        <div><button className='button'>SUBSCRIBE</button></div>
                        </div>
                    </div>
                 </div>
              <section className='footerbottomsec'>
                  <div className='footerlist'>
                      <li><a href=''>BUILD SOFTWARE</a></li> 
                      <li><a href=''>DESIGN DIFFERENT</a></li>   
                        <li><a href=''>APPLY YOUR KNOWLEDGE</a></li>
                       <li><a href=''>FAQ</a></li> 
                  </div>

                  <div className='footerlocation' >
                      <p>Our Local Campus center: Kilometer 7, EnuguPort<br/>
                      Harcout, Expressway, Centenary City, Enugu.<br/>
                      Nigeria.</p>
                      <a href=''>GET IN TOUCH</a>
                  </div>
                  <div className='footermainboxes'>
    < div className='footermainboxfigure'>the box</div> 
    <text className='footertext'>
       <FontAwesomeIcon icon='Twitter' /> <p>Learnable is proud to be<br/>
        a collaborative effort of <br/>
        all the arms of our <br/>product team
        </p>
        <a href=''>HEAD TO DEVSTUDIO</a>
    </text>
</div>
              </section>

                <div className='privacy'>
                   <div className='lasticons'>
                   <div> <FaTwitter /></div>
                   <div><FaFacebook /></div> 
                   <div><FaLinkedin /></div>  
                   <div><FaInstagram /></div>  
                   <div> <FaYoutube /></div> 
                   <div><FaViber /></div>  
                </div>
                <div className='lastpolicy'> <p>c Genesys 2020</p>
                <p>PRIVACY STATEMENT</p></div>
                   
                </div>
            
            
            </div>
            </section>
        )
    }
}
        
 
export default Footer;