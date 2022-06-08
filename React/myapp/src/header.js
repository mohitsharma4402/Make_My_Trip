import React,{Component,Fragment} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super()
       
    }

   
    render(){
        return (
            <Fragment>
                <header>
                    <div id='headermain'>
                        <div id="navbar_main">
                            <a id="logo" href="index.html">Make<span id="logo_my">My</span>Trip</a>
                        </div>
                        <div id="login_button">
                            <button id="lng_button"  type="submit"><a href='' > Login or Create Account</a></button>
                            <button id="lng_button"  type="submit"><a href='' > IN | ENG | INR </a></button>
                        </div> 
                    </div>
                </header>
            </Fragment>
        )
    }
}
    
export default Header;