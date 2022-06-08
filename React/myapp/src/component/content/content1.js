import React,{Component} from 'react';
import './content1.css';

class content extends Component{
    constructor(){
        super()

        
    }
    render(){
        return(
           <div id='maincontain1'>
                <h2>Handpicked Collections for You</h2>
                <div id='maindiv'>
                    <div className='firsttitle'>
                        <img src='https://i.ibb.co/5vdyxss/img-bg-1.jpg' ></img>
                        <button>TOP 12</button>
                        <a href='#'>Honeymoon Destinations</a>
                    </div>

                    <div className='firsttitle'>
                        <img src='https://i.ibb.co/wW21xc8/img-bg-2.jpg' ></img>
                        <button>TOP 12</button>
                        <a href='#'>........Beach Destinations</a>
                    </div>

                    <div className='firsttitle'>
                        <img src='https://i.ibb.co/9ph30Sn/img-bg-3.jpg' ></img>
                        <button>TOP 12</button>
                        <a href='#'>.....Heritage Destinations</a>
                    </div>

                    <div className='firsttitle'>
                        <img src='https://i.ibb.co/yy6QXYY/img-bg-5.jpg' ></img>
                        <button>TOP 12</button>
                        <a href='#'>International Destinations</a>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default content