import React, { Component } from 'react';
import '../style.css' ;
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
/*import LearnableSw from './LearnableSw';
import LearnablePd from './LearnablePd';
import Apply from './Apply'; 
import  Faq from './Faq';
import Journal from './Journal'
import Footer from './footer'*/
import Homepage from './homepage'

class App extends Component {
    state = {  }
    render() { 
        return (
<div>
<section id="section1">
    <Navbar />
    <Navbar2 />
    <Homepage />
   </section>
   </div>
       );
    }
}
 
export default App;