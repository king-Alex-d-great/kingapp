import React, { Component } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

class Apply extends Component {
    state = {  }
    render() { 
        return (
            <main className='Apply'>
                <Navbar/>
                <Navbar2 />
                <div className='container'>
                    <section className='apply'>
                        <article>
                            <h1>....</h1>
                            <p>.....</p>
                        </article>
                        <div className='applytopbar'>applytopbar</div>
                    </section>
                    <box/>
                    <section className='stages'>
                        <text>
                            <h4>........</h4>
                            <p>.....</p>
                        </text>
                        <text>
                            <h4>........</h4>
                            <p>.....</p>
                        </text>
                        <text>
                            <h4>........</h4>
                            <p>.....</p>
                        </text>
                        <text>
                            <h4>........</h4>
                            <p>.....</p>
                        </text>
                        <text>
                            <h4>........</h4>
                            <p>.....</p>
                        </text>
                    </section>
                    <footer/>
                </div>
            </main>
          );
    }
}
 
export default Apply;