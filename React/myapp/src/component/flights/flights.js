import React,{Component} from 'react';
import Footer from '../../footer';
import Header from '../../header';
import './flights.css';

class Flights extends Component{
    constructor(){
        super()

        
    }
    render(){
        return(
            <>
            <Header/>
            <section id="mainto">  
            <h1>Book Your 'FLIGHTS' !</h1> 
            
            <div id="secondmain">
                <div id="thirdmain">
                    <h3>FROM</h3>
                    <input /> 
                </div> 
                <div class="swap-icon marR8"></div>
                <div id="thirdmain">
                    <h3>TO</h3>
                    <input /> 
                </div> 
                <div id="thirdmain">
                    <h3>DEPARTURE</h3>
                    <input type="date"></input>
                </div> 
                <div id="thirdmain">
                    <h3>PASSENGERS or CLASS</h3>
                    <label for="PASSENGERS">ADULTS (12y +)</label>
                    <select name="PASSENGERS" id="PASSENGERS">
                        <option value="01">ADULT 01</option>
                        <option value="02">ADULT 02</option>
                        <option value="03">ADULT 03</option>
                        <option value="04">ADULT 04</option>
                        <option value="05">ADULT 05</option>
                        <option value="06">ADULT 06</option>
                        <option value="07">ADULT 07</option>
                        <option value="08">ADULT 08</option>

                    </select><br></br>

                    <label for="PASSENGERS">CHILDREN (2y - 12y )</label>
                    <select name="CHILDREN (2y - 12y )" id="CLASS">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                    </select><br></br>

                    <label for="PASSENGERS">CHOOSE TRAVEL CLASS</label>
                    <select name="CLASS" id="CLASS">
                        <option value="Economy">Economy</option>
                        <option value="Premium Economy">Premium Economy</option>
                        <option value="Premium">Premium</option>
                        <option value="Business">Business</option>
                    </select>

                    {/* <input id="travellerAndClass" type="text" class="hsw_inputField guests font16 whiteText textOverflow" readonly="" value="1 Adult, Economy"></input> */}
                </div> 
                <div id="searchmain">
                    <button>SEARCH</button>
                </div>  
            </div>
        </section>

        <div id="maincontain1" className='container'> 
        <div id="maincontain12">
        <div id="chart1" className="container card-body">
          <h4>PRODUCT OFFERING</h4>            
          <a id="chart1_content" href="#" className=""><span> International Flights,</span></a>
          <a id="chart1_content" href="#" className=""><span>Charter Flights,</span></a>
          <a id="chart1_content" href="#" className=""><span>International Hotels,</span></a>
          <a id="chart1_content" href="#" className=""><span>International Holidays,</span></a>
          <a id="chart1_content" href="#" className=""><span>Book Online Cabs,</span></a>
          <a id="chart1_content" href="#" className=""><span>Vande Bharat Mission Flights,</span></a>
          <a id="chart1_content" href="#" className=""><span>Air Bubble Flights,</span></a>
          <a id="chart1_content" href="#" className=""><span>Cheap Tickets to India,</span></a>
          <a id="chart1_content" href="#" className=""><span>Book Flights From US,</span></a>
          <a id="chart1_content" href="#" className=""><span>Book Flights From UAE,</span></a>
          <a id="chart1_content" href="#" className=""><span>Trip Planner,</span></a>
          <a id="chart1_content" href="#" className=""><span>Gift Cards,</span></a>
  
        </div>
  
  
        <div id="chart1" class="container card-body">
          <h4>MAKEMYTRIP</h4>
          <a id="chart1_content" href="#" className=""><span>About Us,</span></a>
          <a id="chart1_content" href="#" className=""><span>Investor Relations,</span></a>
          <a id="chart1_content" href="#" className=""><span>Careers,</span></a>
          <a id="chart1_content" href="#" className=""><span>Corporate Travel,</span></a>
          <a id="chart1_content" href="#" className=""><span>MMT Foundation,</span></a>
          <a id="chart1_content" href="#" className=""><span>CSR Policy,</span></a>
          <a id="chart1_content" href="#" className=""><span>myPartner - Travel Agent Portal,</span></a>
          <a id="chart1_content" href="#" className=""><span>Foreign Exchange,</span></a>
          <a id="chart1_content" href="#" className=""><span>List your hotel,</span></a>
          <a id="chart1_content" href="#" className=""><span>Partners- Redbus,</span></a>
          <a id="chart1_content" href="#" className=""><span>Partners- Goibibo </span></a>
        </div>
  
        
        
  
        <div id="chart1" class="container card-body">
          <h4>IMPORTANT LINKS</h4><br></br>   
          <a id="chart1_content" href="#" className=""><span> Cheap Flights,</span></a>
          <a id="chart1_content" href="#" className=""><span>Flight Status,</span></a>
          <a id="chart1_content" href="#" className=""><span>Kumbh Mela,</span></a>
          <a id="chart1_content" href="#" className=""><span>Domestic Airlines,</span></a>
          <a id="chart1_content" href="#" className=""><span>International Airlines,</span></a>
          <a id="chart1_content" href="#" className=""><span>Indigo,</span></a>
          <a id="chart1_content" href="#" className=""><span>Spicejet,</span></a>
          <a id="chart1_content" href="#" className=""><span>GoAir,</span></a>
          <a id="chart1_content" href="#" className=""><span>Air Asia,</span></a>
          <a id="chart1_content" href="#" className=""><span>Air India,</span></a>
          <a id="chart1_content" href="#" className=""><span>Corporate Flight Booking,</span></a>
          <a id="chart1_content" href="#" className=""><span>Trip Ideas,</span></a>
          <a id="chart1_content" href="#" className=""><span>Honeymoon Destinations,</span></a>
          <a id="chart1_content" href="#" className=""><span>Romantic Destinations,</span></a>
          <a id="chart1_content" href="#" className=""><span>Popular Destinations,</span></a>
          <a id="chart1_content" href="#" className=""><span>Resorts In Udaipur,</span></a>
          <a id="chart1_content" href="#" className=""><span>Resorts In Munnar,</span></a>
          <a id="chart1_content" href="#" className=""><span>Villas In Lonavala,</span></a>
          <a id="chart1_content" href="#" className=""><span> Villas In Goa,</span></a>
          <a id="chart1_content" href="#" className=""><span>Domestic Flight Offers,</span></a>
          <a id="chart1_content" href="#" className=""><span>International Flight Offers,</span></a>
          <a id="chart1_content" href="#" className=""><span>UAE Flight Offers,</span></a>
          <a id="chart1_content" href="#" className=""><span>USA,</span></a>
          <a id="chart1_content" href="#" className=""><span>UAE,</span></a>
          <a id="chart1_content" href="#" className=""><span>UK,</span></a>
          <a id="chart1_content" href="#" className=""><span>Saudi Arabia</span></a>
        </div>
      </div>
      </div>
  
  
        <div id="maincontain" className="container-fluid row card-body">
        <div id="maincontain2" className="container row">
          <div id="contain1" className="container">
            <h3>Why MakeMyTrip?</h3>
            <p>Established in 2000, MakeMyTrip has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers’ evolving needs and demands.</p>
          </div>
          <div id="contain1" className="container">
            <h3>Booking Flights with MakeMyTrip</h3>
            <p>At MakeMyTrip, you can find the best of deals and cheap air tickets to any place you want by booking your tickets on our website or app. Being India’s leading website for hotel, flight, and holiday bookings, MakeMyTrip helps you book flight tickets that are affordable and customized to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to cater to our customer’s queries and concerns. Serving over 5 million happy customers, we at MakeMyTrip are glad to fulfill the dreams of folks who need a quick and easy means to find air tickets. You can get a hold of the cheapest flight of your choice today while also enjoying the other available options for your travel needs with us.</p>
          </div>
          <div id="contain1" className="container">
            <h3>Domestic Flights with MakeMyTrip</h3>
            <p>MakeMyTrip is India's leading player for flight bookings, and have a dominant position in the domestic flights sector. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current flight status, instant fare drops, amazing discounts, instant refunds and rebook options, price comparisons and many more interesting features.</p>
          </div>
        </div>
        </div>
        <Footer/>
        </>
       


        )
    }

    
}

export default Flights