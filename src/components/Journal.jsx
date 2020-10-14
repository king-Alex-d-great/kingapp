import React, { Component } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';


class Journal extends Component {
    state = {  }
    render() { 
        return ( 
            <main className='Journal'>
                <Navbar/>
                <Navbar2/>
                <div className='container'>
                    <section className='journaltop'>
                        <header>
                            <h1>....</h1>
                        </header>
                        <div>
                            <button className='button'>categories</button>
                            <a href=''>inspiration</a>
                        </div>
                        <section className='journalsection2'>
                            <box/>
                               {/*<check learnable homepage*/}
                        </section>
                        <section className='journalbottom'>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                                <a href=''>...</a>
                                <h4>.....</h4>
                                <p>.....</p>
                            </div>
                            <button className='button'>...</button>
                        </section>
                        <footer/>

                    </section>
                </div>
            </main>
         );
    }
}
 
export default Journal;