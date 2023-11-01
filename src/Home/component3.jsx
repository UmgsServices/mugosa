import image from "./img/images (2).jpeg"
import { Link } from "react-router-dom"
import {Navigate, Route, Routes,useNavigate} from 'react-router-dom';
function Component3(){
    const d=useNavigate()
    function onClicks(){
      d("/cars/Cars")}
return <div className="component0">
    <div className="img1"><Link to="/cars/cars"><img src={image} /></Link></div>
<div className="note">
    <p><h1>View Available Cars</h1></p>
    <br/>
<p>Go and explore youre opportunities detailed description of each car is included.</p>
<button className="buttonH" onClick={onClicks}>View</button>
</div>


</div>

}
export default Component3