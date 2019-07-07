import React from 'react';
import { HomeTop } from '../scomps.js'

const Home = () => {

    return (
        <div>
            <HomeTop>
                <section className="top">
                    <h1 id='title'>Seeing in Principles</h1>
                    <p id='titleP'>Problems cannot be solved by the same thinking that created them.</p>
                </section>
                <section className="topMid">
                    <div className='card'>
                        <h2>Why</h2>
                        <p>Problems cannot be solved by the same thinking that created them.</p>
                    </div>
                    <div className='card'>
                        <h2>How</h2>
                        <p>Problems cannot be solved by the same thinking that created them.</p>
                    </div>
                    <div className='card'>
                        <h2>What</h2>
                        <p>Problems cannot be solved by the same thinking that created them.</p>
                    </div>
                </section>
            </HomeTop>
        </div>
    )
}

export default Home;