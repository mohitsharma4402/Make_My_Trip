import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/login/loginComponent';
import Register from './Component/login/registerComponent' 
import Flights from './Component/flights/flights';
import HotelPage from './Component/pages/hotelpage/hotelpage1';


const Routing = () => {
    return(
        <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/flights" component={Flights}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/hotelpage" component={HotelPage}/>
        </BrowserRouter>
    )
}

export default Routing