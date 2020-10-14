import React, { Component } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

class LearnablePd extends Component {
    state = {  }
    render() { 
        return (         
                <main className='LearnablePd'>
                    <Navbar/>
                    <Navbar2/>
                    <div className='container'>
                       <section className='learnablepd'>
                           <article>
                              <h1>.......</h1>
                              <text>............</text>
                           </article>
                            <div className='circleimage'>circleimage</div>
                       </section>
                       <h3>.......</h3>
                       <section className='devexpect'>
                            <box/>
                            <article>
                                <h1>...</h1>
                                <p>.......</p>
                            </article>
                        </section>
                        <footer/>
                    </div>
                </main> );
    }
}
 
export default LearnablePd;