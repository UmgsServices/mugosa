import image from "./img/motorafrica_phone_mockup.png"
import driver from "./img/driver_partners.png"
import { Link } from "react-router-dom"
import {Navigate, Route, Routes,useNavigate} from 'react-router-dom';
function AboutCar(){
  const d=useNavigate()
  function HandleClick(){
d("/Home/contact")
  }
return <main className="component"style={{display:"grid"}}>
<div className="note"style={{width:'500px'}} >
    <h1>CAR OWNERS</h1>
  <br/>
    <img src={driver}/>
<p className="attract">Earn Up to 15% ANNUALLY IN ONE CLICK
</p>
<p><h3>managing your cars got easier</h3></p>
<ul>
    <li>
       <h4>Installment purchase</h4>
       <p>Why Installment Purchase</p>
       In this process our client can get to sell their cars
        at profit  of about 30% of their car value within maximum 
        period of one year,and also get an initial deposite of atleast 10%
        value of the car
      <ul>
      <h4>Benefits</h4>
        <li>profit of 30%</li>
      </ul>

    </li>
    <li>
    <h4> lease the car out for profit return</h4>
    this a process where our clints give out cars to Drivers 
    under our management for a return of not less than 15% annualy.
    <ul>
      <h4>Benefits</h4>
        <li>return of at least 15% annualy</li>
        <li>24 Hours car tracking</li>
      </ul>
      
    </li>
</ul>
<button className="buttonH" id="owner" onClick={HandleClick}><h1>start earning now</h1></button>
</div>
<br/><br/><br/>
<div className="note"style={{width:'500px'}}>
    <p><h1>DRIVERS</h1></p>
    <br/>
    <img src={driver}/>
<p className="attract">START EARNING UP TO 100,000 A MONTH
</p>
<p><h3>getting your cars got easier</h3></p>
<ul>
    <li>
       <h4>Installment purchase</h4>
       <p>Why Installment Purchase</p>
       In this process our client can own
        a car at cheap amounts within maximum period of a year  with out intrest
       
      <ul>
      <h4>Benefits</h4>
        <li>own a car within one year</li>
        <li>intrest free</li>
      </ul>

    </li>
    <li>
    <h4> car hire</h4>
    this a process where our drivers get commercial cars at cheap daily
    prices for rendering daily commercial services
    <ul>
      <h4>Benefits</h4>
        <li>earn up to 100,000 ever month</li>
        <li>low liabilities</li>
      </ul>
      
    </li>
</ul>

<button className="buttonH" id="driver" onClick={HandleClick}><h1>apply now</h1></button>

</div>

</main>

}
export default AboutCar