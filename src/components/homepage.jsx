import React, { Component } from 'react';
import { FaArrowDown} from 'react-icons/fa';
import {Link} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './footer';

class Homepage extends Component {
    state = {  }
    render() { 
        return (
<div className='container'>
    <Navbar/>
<section className="section1">
   <header>
<h1 className='bigger'>Genesys Provides Opportunity For<br/>
Young Nigerian Techies And<br/>
Opportunities To Grow And<br/>
Innovate</h1>
</header>
<p>We understand that opportunities are scarce in this parts. We<br/>
are either creating or exposing our people to these<br/>
opportunities.
</p>
</section>
<section>
<div className='image1'>
<icon><FaArrowDown /></icon>
<figure className='iconbox'></figure>

</div>
<div className='mainboxes'>
<figure className='mainboxfigure'>the box</figure>
<text>
<h3>Learnable</h3>
<p>Every year, young Nigerians are launching new careers in the technology<br/>
industry. Find out how Genesys is helping them do it.
</p>
<Link to='./Learnablehomepage'>LEARN MORE</Link>
</text>
</div>
<div className='mainboxescolor'><text>
<h3>Agora</h3>
<p>We are reimagining the workplace andhow people work. Find out how our <br/>
    co-working space can help you enjoy the work that you do.</p>
<Link to='./'>LEARN MORE</Link>
</text>

<figure className='mainboxfigure'>the box</figure>

</div>
<div className='mainboxes'>
<figure className='mainboxfigure'>the box</figure>
<text>
<h3>StartZone</h3>
<p>The business environment is harsh for early-stage businesses. We can help you<br/>
rise above it all</p>
<Link to='./'>HERE'S HOW</Link>
</text>
</div>
<div className='bottomboxes'>
<div className='innerbottomboxes1'>
    <div className='innerbottombox'>
        <figure className='small'>genesys ignite box</figure>
    </div>
    <div className='innerbottombox'>
    <h3><Link to='./'>Genesys<br/> Ignite</Link></h3>
    </div>
    <div className='innerbottombox'> 
       <figure className='small'>the box</figure>
       <p className='smalltext'>We are reimagining the workplace and how people work. Find out how our <br/>
       co-working space can help you enjoy the work that you do.</p>
    </div>
    <div className='innerbottombox'>
        <figure className='small'>the box</figure>
        <p className='smalltext'>We are reimagining the workplace andhow people work. Find out how our <br/>
co-working space can help you enjoy the work that you do.</p>
    </div>
</div>
<div><h1>Other things we do</h1></div>
</div>
<div className='mainboxes'>
<figure className='mainboxfigure'>the box</figure>
<text>
<h3>Learnable</h3>
<p>Every year, young Nigerians are launching new careers in the technology<br/>
industry. Find out how Genesys is helping them do it.
</p>
<Link to='./'>LEARN MORE</Link>
</text>
</div>
</section>
<Footer/>
</div>
       );
    }
}
 
export default Homepage;