import React from 'react';
import Header from '../../header';
import Firstshow from '../firstshow/firstshow';
import QuickSearch from '../Home1/QuickSearch';
import Download from '../down/download';
import Content from '../content/content1';
import Unlock from '../unlock/unlock';
import Links from '../linkss/links';
import About from '../aboutus/about';
import Footer from '../../footer';


const Home = (props) => {
        return(
            <div>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <Firstshow/>
                <QuickSearch/>
                <Download/>
                <Content/>
                <Unlock/>
                <Links/>
                <About/>
                <Footer year="2022" month="April"/>
            </div>
        )
    
}

export default Home;