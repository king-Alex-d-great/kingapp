import React, { Component } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import LearnableSw from './LearnableSw'

class Homepage extends Component {
    state = {  }
    render() { 
        return (
<div>
<section id="section1">
    <Navbar />,
    <Navbar2 />
    <LearnableSw/>
    <header>
        <h1>Genesys Provides Opportunity For<br/>
        Young Nigerian Techies And<br/>
       Opportunities To Grow And<br/>
        Innovate</h1>
    </header>
<p>We understand that opportunities are scarce in this parts. We<br/>
are either creating or exposing our people to these<br/>
opportunities
</p>
</section>

<section>
<div className='image1'>
    <icon> arrow </icon>
    <figure className='iconbox'></figure>
</div>
<div className='mainboxes'>
    <figure className='mainboxfigure'>the box</figure>
    <text>
        <h3>Learnable</h3>
        <p>Every year, young Nigerians are launching new careers in the technology<br/>
        industry. Find out how Genesys is helping them do it.
        </p>
        <a href=''>LEARN MORE</a>
    </text>
</div>
<div className='mainboxescolor'><text>
        <h3>Agora</h3>
        <p>We are reimagining the workplace andhow people work. Find out how our <br/>
            co-working space can help you enjoy the work that you do.</p>
        <a href=''>LEARN MORE</a>
    </text>

    <figure className='mainboxfigure'>the box</figure>
    
</div>
<div className='mainboxes'>
    <figure className='mainboxfigure'>the box</figure>
    <text>
        <h3>StartZone</h3>
        <p>The business environment is harsh for early-stage businesses. We can help you<br/>
        rise above it all</p>
        <a href=''>HERE'S HOW</a>
    </text>
</div>
<div className='bottomboxes'>
    <div className='innerbottomboxes1'>
    <div className='innerbottomboxes'>
        <div><figure className='small'>genesys ignite box</figure></div>
      <div>  <h3><a href=''>Genesys<br/> Ignite</a></h3></div>
      </div>
<div className='innerbottomboxes' >
   <div> <figure className='small'>the box</figure>
        <p>We are reimagining the workplace and how people work. Find out how our <br/>
            co-working space can help you enjoy the work that you do.</p></div>
     <div>       <figure className='small'>the box</figure>
        <p>We are reimagining the workplace andhow people work. Find out how our <br/>
            co-working space can help you enjoy the work that you do.</p>
</div>
    </div>
    </div>
    <h1>Other things we do</h1>

</div>
<div className='mainboxes'>
    <figure className='mainboxfigure'>the box</figure>
    <text>
        <h3>Learnable</h3>
        <p>Every year, young Nigerians are launching new careers in the technology<br/>
        industry. Find out how Genesys is helping them do it.
        </p>
        <a href=''>LEARN MORE</a>
    </text>
</div>
<div className='image1'>
    <icon> arrow </icon>
    <figure className='iconbox'></figure>
</div>

</section>
   </div>   
       );
    }
}
 
export default Homepage;