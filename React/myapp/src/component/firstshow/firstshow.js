import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './first.css';

class Firstshow extends Component{
    constructor(){
        super()

        
    }
    render(){
        return(
           <div id='maincontain33'>
                <h2>MAKE MY TRIP</h2>
                <h4>Make A Trip ! Change Your Life !</h4>
                <div id='buttons'>
                    <Link to="/flights"><button className='button' type='submit'><a href='#'>FLIGHTS</a> </button></Link>
                    <button className='button'><a href='#'>HOTELS</a></button>
                    <button className='button'><a href='#'>CABS</a></button>
                    <button className='button'><a href='#'>TRIPS</a></button>
                </div>
            </div>
            
        )
    }

    
}

export default Firstshow