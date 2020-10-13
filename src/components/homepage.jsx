import React, { Component } from 'react';
import Navbar from './Navbar'

class Homepage extends Component {
    state = {  }
    render() { 
        return (

<section id="section1">
    <Navbar />,
    <header>
        <h1>Genesys Provides Opportunity For<br/>
        Young Nigerian Techies And<br/>
       Opportunities To Grow And<br/>
        Innovate</h1>
    </header>
<p>We undersatnd that opportunities are scarce in this parts. We<br/>
are either creating or exposing our people to these<br/>
opportunities
</p>

</section>
          );
    }
}
 
export default Homepage;