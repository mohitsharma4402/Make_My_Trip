import React,{Component} from 'react';
import './download.css';

class download extends Component{
    constructor(){
        super()

        
    }
    render(){
        return(
           <div id='maincontain00'>
                <h1 className='mainhead'>Download App Now !</h1>
                <h3 id='secondhead'>Get India's #1 travel super app, join 100 Million+ happy travellers!</h3>
                <p id='thirdhead'>Use code <span>WELCOMEMMT</span> and get upto <span>RS 1200</span> off on your first domestic flight booking</p>
                
                    <button id='downbutton'><a href='https://play.google.com/store/apps/details?id=com.makemytrip&%24web_only=true&_branch_match_id=705263102167153128&_branch_referrer=H4sIAAAAAAAAAw3KSQ7AIAgAwB%2FJvb8hxVYiW4TE%2BPt2zjOqIi8AjBC2mU1xdj21ONrtCh3QaDnTH8i3iSM9wu%2Bo%2FACKFEKOOwAAAA%3D%3D'>GET APP LINK</a></button>
          
                <div>
                    <div id="app_buttons1">
                        <img src="https://i.ibb.co/NFDJRYz/google-play-badge.jpg"></img>
                    </div>
                    <div id="app_buttons2">
                        <img src="https://i.ibb.co/VjNrB0Q/app-store-icon.jpg"></img>
                    </div>
                    <div id='Qr_code'>
                        <img src="https://i.ibb.co/WVKfXQ6/QRCode.jpg"></img>
                    </div>
                </div>    
            </div>
        )
    }

    
}

export default download