import React, { Component } from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import '../style.css' ;
import LearnableSw from './LearnableSw';
import LearnablePd from './LearnablePd';
import Apply from './Apply'; 
import  Faq from './Faq';
import Journal from './Journal';
import Homepage from './homepage';
import Learnablehomepage from './Learnablehomepage';

class App extends Component {
    state = {  }
    render() { 
        return (
<div>
<section id="section1">
       <Router>
         <switch>
             <Route exact path="/"  component={Homepage} />
             <Route exact path="/Learnablehomepage"  component={Learnablehomepage} />
             <Route exact path="/LearnableSw"  component={LearnableSw} />
             <Route exact path="/LearnablePd"  component={LearnablePd} />
             <Route exact path="/Apply"  component={Apply} />
             <Route exact path="/Journal"  component={Journal} />
             <Route exact path="/Faq"  component={Faq} />
      
          
         </switch>
       </Router> 
   </section>
   </div>
       );
    }
}
 
export default App;