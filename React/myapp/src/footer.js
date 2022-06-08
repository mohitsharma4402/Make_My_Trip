import React from 'react';
import './Footer.css';
const Footer = (props) => {
    return (
        <React.Fragment>
            <hr/>
            <div id='myfooter'>
                <div id="social1">
                    <a href="https://github.com/mohitsharma4402" target="_blank">
                        <img src="https://i.ibb.co/nmB2MZS/github2.png" alt="github icon" height="50px" width="50px" />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="https://i.ibb.co/dtzG625/facebook.png" alt="fb icon" height="50px" width="50px"/>
                    </a>
                    <a href="https://www.instagram.com/mohit_sharma_official4/" target="_blank">
                        <img src="https://i.ibb.co/19H5LvT/insta.png" alt="insta icon" height="50px" width="50px"/>
                    </a>
                    <a href="https://twitter.com/MohitSharma4402" target="_blank">
                        <img src="https://i.ibb.co/JqpCSYJ/twitter4.png" alt="twitter icon" height="50px" width="50px"/>
                    </a>
                </div>
                <div id='myname'>
                    <h3>&copy; MOHIT SHARMA {props.year} {props.month}</h3>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;