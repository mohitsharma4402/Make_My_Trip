import React,{Component} from "react";
import axios from 'axios';
import './listing.css';

class Listing extends Component {
    constructor(props){
        super(props)


        this.state= {
            makemytrip:''
        }
    }

    render(){
        return(
            <>
                <h1>2nd pages</h1>
            </>
        )
    }
}

export default Listing