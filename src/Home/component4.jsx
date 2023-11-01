import image from "./img/images.jpeg"
import { Link } from "react-router-dom"
import {Navigate, Route, Routes,useNavigate} from 'react-router-dom';

function Component4(){
    const d=useNavigate()
    function onClicks(){
      d("/Home/contact")}
return <div className="component0">
    <img className="img1"src={image} />
<div className="note">
    <p><h1>Contact us </h1></p>
    <br/>
<p>Mugosa Africa is revolutionizing and optimizing opportunities available in the automotive value chain.</p>
<button className="buttonH" onClick={onClicks}>contact us</button>
</div>


</div>

}
export default Component4