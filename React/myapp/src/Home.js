import React,{Component} from 'react';
import Header from './header';
import Firstshow from './component/firstshow/firstshow';
import QuickSearch from './component/Home/QuickSearch';
import Download from './component/down/download';
import Content from './component/content/content1';
import Unlock from './component/unlock/unlock';
import Links from './component/linkss/links';
import About from './component/aboutus/about';
import Footer from './footer';
import { BrowserRouter } from 'react-router-dom';


class Home extends Component {
    constructor(){
        super()

        
    }
   
    render(){
        return(
            <>
            <BrowserRouter>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <Firstshow/>
                <QuickSearch/>
                <Download/>
                <Content/>
                <Unlock/>
                <Links/>
                <About/>
                <Footer year="2022" month="April"/>
            </BrowserRouter>
            </>
        )
    }
}

export default Home