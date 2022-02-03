import React from 'react';

import {Footer,Blog,possiblity,Features,WhatG,Header} from './containers';
import {Cta,Brand,Navbar} from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatG />
            <Features />
            <possiblity />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App