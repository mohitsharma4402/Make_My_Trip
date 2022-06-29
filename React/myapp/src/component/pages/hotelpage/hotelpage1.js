import React,{Component} from 'react';
import Footer from '../../../footer';
import Header from '../../../header';
import './hotelpage1.css';

class HotelPage extends Component{
    constructor(){
        super()

        
    }
    render(){
        return(
            <>
                <Header/>
                <div>
                    <div  id="heading">
                        <span id="title1">H</span><span id="title2">OTEL</span><br></br>
                        <div id="name_heading"><span id="title3">P</span><span id="title4">ACKAGES</span></div>
                    </div><hr></hr>
                    <div id="card">
                        <div className="foodcontent">
                            <img src="https://i.ibb.co/RSgv7q0/hotel-1.jpg" alt="Hotel" title="Hotel"></img>
                            <div className="breakfastcontent">
                                <div id="tilecontainer21">
                                    <div className="componentheading">
                                        <a href="#">Aloo Paratha</a>
                                    </div>
                                    <div className="componentsubheading">
                                        Enjoy Your Meel
                                    </div>
                                    <div class="button01">
                                        <button id="button11" type="button" className="btn btn-success"><a href="#">Search</a></button><br></br>
                                        <button id="button12" type="button" className="btn btn-warning"><a href="#">Search</a></button><br></br>
                                        <button id="button13" type="button" className="btn btn-success"><a href="#">Search</a></button><br></br>
                                        <button id="button14" type="button" className="btn btn-warning"><a href="#">Search</a></button><br></br>
                                    </div>
                                </div>
                            </div>
                        </div><br></br>
                    </div>

                        <div className="foodcontent">
                                <img src="https://i.ibb.co/DVv9DBZ/hotel-3.jpg" alt="Hotel" title="Hotel"></img>
                            <div className="breakfastcontent">
                                <div id="tilecontainer21">
                                    <div className="componentheading">
                                        <a href="../Details/detail2.html">Samosa Chatni</a>
                                    </div>
                                    <div className="componentsubheading">
                                        Enjoy Your Meel
                                    </div>
                                    <div className="button01">
                                        <button id="button11" type="button" className="btn btn-success"><a href="#">Search</a></button><br></br>
                                        <button id="button12" type="button" className="btn btn-warning"><a href="#">Search</a></button><br></br>
                                        <button id="button13" type="button" className="btn btn-success"><a href="#">Search</a></button><br></br>
                                        <button id="button14" type="button" className="btn btn-warning"><a href="#">Search</a></button><br></br>
                                    </div>
                                </div>
                            </div>
                        </div><br></br>


                        <div className="foodcontent">
                            <img src="https://i.ibb.co/DzxRjRd/hotel-7.jpg" alt="Hotel" title="Hotel" />
                            <div className="breakfastcontent">
                                <div id="tilecontainer21">
                                    <div className="componentheading">
                                        <a href="../Details/detail3.html">Masala Dosa</a>
                                    </div>
                                    <div className="componentsubheading">
                                        Enjoy Your Meel
                                    </div>
                                    <div className="button01">
                                        <button id="button11" type="button" className="btn btn-success"><a href="#">Search</a></button><br></br>
                                        <button id="button12" type="button" className="btn btn-warning"><a href="#">Search</a></button><br></br>
                                        <button id="button13" type="button" className="btn btn-success"><a href="#">Search</a></button><br></br>
                                        <button id="button14" type="button" className="btn btn-warning"><a href="#">Search</a></button><br></br>
                                    </div>
                                </div>
                            </div>
                        </div><br></br>


                        <div className="foodcontent">
                            <img src="https://i.ibb.co/X251ScH/hotel-9.jpg" alt="Hotel" title="Hotel" />
                            <div className="breakfastcontent">
                                <div id="tilecontainer21">
                                    <div className="componentheading">
                                        <a href="../Details/detail4.html">Idli Sambar</a>
                                    </div>
                                    <div className="componentsubheading">
                                        Enjoy Your Meel
                                    </div>
                                    <div className="button01">
                                        <button id="button11" type="button" className="btn btn-success"><a href="#">Search</a></button><br></br>
                                        <button id="button12" type="button" className="btn btn-warning"><a href="#">Search</a></button><br></br>
                                        <button id="button13" type="button" className="btn btn-success"><a href="#">Search</a></button><br></br>
                                        <button id="button14" type="button" className="btn btn-warning"><a href="#">Search</a></button><br></br>
                                    </div>
                                </div>
                            </div>
                        </div><br></br>



                        <div className="foodcontent">
                            <img src="https://i.ibb.co/ynfLn2F/room-5.jpg" alt="Hotel" title="Hotel" />
                            <div className="breakfastcontent">
                                <div id="tilecontainer21">
                                    <div className="componentheading">
                                        <a href="../Details/detail5.html">Pav Bhaji</a>
                                    </div>
                                    <div className="componentsubheading">
                                        Enjoy Your Meel
                                    </div>
                                    <div className="button01">
                                        <button id="button11" type="button" className="btn btn-success"><a href="#">Search</a></button><br></br>
                                        <button id="button12" type="button" className="btn btn-warning"><a href="#">Search</a></button><br></br>
                                        <button id="button13" type="button" className="btn btn-success"><a href="#">Search</a></button><br></br>
                                        <button id="button14" type="button" className="btn btn-warning"><a href="#">Search</a></button><br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <Footer/>
            </>
        )
    }

    
}

export default HotelPage