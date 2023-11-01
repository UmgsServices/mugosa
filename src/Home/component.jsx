import image from "./img/motorafrica_phone_mockup.png"
import { Link } from "react-router-dom"
import {Navigate, Route, Routes,useNavigate} from 'react-router-dom';
function Component(){
    const d=useNavigate()
    function onClicks(){
      d("/coming")}
return <div className="component0">
<div className="note">
    <p><h1>Conecting More Vehicles for a Better future</h1></p>
    <br/>
<p>Mugosa Africa is revolutionizing and optimizing opportunities available in the automotive value chain.</p>
<button className="buttonH" onClick={onClicks}>Explore</button>
</div>
<img className="img2" src={image} />
<div className="note">
    <h1>Download the Mobile App</h1>
   <button className="button"><h1>App Store</h1></button>
    <button className="button"><h1>google Play</h1></button>
</div>
</div>

}
export default Component