import React, { Component } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import {Link} from "react-router-dom";


class Journal extends Component {
    state = {  }
    render() { 
        return ( 
            <main className='Journal'>
                <Navbar/>
                <Navbar2/>
                <div className='container'>
                    <section className='journaltop'>
                       <div><h1>Journal</h1></div> 
                        <div className='journaltopside'>
                            <button className='button'>categories</button>
                          <p><Link to='./Journal'>inspiration</Link></p>
                        </div>
                    </section>
                       <section className='journalsection2'>
                      < div className='mainboxes'>
    <figure className='mainboxfigure'>the box</figure>
    <text>
        <h3>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h3>
        <p>Every year, young Nigerians are launching new careers in the technology<br/>
        industry. Find out how Genesys is helping them do it.
        </p>
        <Link to='./LearnablePd'>LEARN MORE</Link>
    </text>
</div>

                        </section>
                        <section classame='journalbottom'>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                               <Link to='./Journal'>INSPIRATION</Link>
                                <h4>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h4>
                                <p className='smalltext'>Ogubuike Alex, Oct 15, 2020</p>
                            </div>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                                <Link to='./Journal'>INSPIRATION</Link>
                                <h4>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h4>
                                <p className='smalltext'>Ogubuike Alex, Oct 15, 2020</p>
                            </div>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                                <Link to='./Journal'>INSPIRATION</Link>
                                <h4>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h4>
                                <p className='smalltext'>Ogubuike Alex, Oct 15, 2020</p>
                            </div>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                                <Link to='./Journal'>INSPIRATION</Link>
                                <h4>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h4>
                                <p className='smalltext'>Ogubuike Alex, Oct 15, 2020</p>
                            </div>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                                <Link to='./Journal'>INSPIRATION</Link>
                                <h4>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h4>
                                <p className='smalltext'>Ogubuike Alex, Oct 15, 2020</p>
                            </div>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                                <Link to='./Journal'>INSPIRATION</Link>
                                <h4>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h4>
                                <p className='smalltext'>Ogubuike Alex, Oct 15, 2020</p>
                            </div>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                                <Link to='./Journal'>INSPIRATION</Link>
                                <h4>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h4>
                                <p className='smalltext'>Ogubuike Alex, Oct 15, 2020</p>
                            </div>
                            <div className='journalbottomsections'>
                                <div className='journalbox'>gcsgdgd</div>
                                <Link to='./Journal'>INSPIRATION</Link>
                                <h4>Learn Design<br/>
                                Thinking Like A<br/>
                                Pro And Build <br/>
                                Projects That <br/>
                                People Will Care <br/>
                                About</h4>
                                <p className='smalltext'>Ogubuike Alex, Oct 15, 2020</p>
                            </div>
                            
                        </section>
                      <div className='btn'>  <button className='button'>SEE MORE</button></div>
                        <footer/>

                   
                </div>
            </main>
         );
    }
}
 
export default Journal;