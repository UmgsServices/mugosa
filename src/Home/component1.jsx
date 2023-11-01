import image from "./img/img-15 (7).png"
import { Link } from "react-router-dom"
import {Navigate, Route, Routes,useNavigate} from 'react-router-dom';

function Component1(){
    const d=useNavigate()
  function onClicks(){
    d("/Home/about_cars")}
   
return <div className="component0">
    <img className="img1" src={image} />
<div className="note">
    
    <p><h1>Learn About Our Clints</h1></p>
    <br/>
<p>We work with car-Owners, Drivers and Stake Holders.</p>
<button className="buttonH" onClick={onClicks}>View</button>
</div>

</div>
}
export default Component1