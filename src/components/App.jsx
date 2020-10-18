import React, { Component } from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import './FontAwesome';
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
import Learnablehomepage from './Learnablehomepage'

class App extends Component {
    state = {  }
    render() { 
        return (
<div>
<section id="section1">
     <Router>
         <switch>
             <Route exact path="/"  component={Homepage} />
             <Route exact path="./Navbar"  component={Navbar} />
             <Route exact path="./Learnablehomepage"  component={Learnablehomepage} />
         </switch>
    </Router>
   </section>
   </div>
       );
    }
}
 
export default App;