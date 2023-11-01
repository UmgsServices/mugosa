import image from "./img/motorafrica_phone_mockup.png"
import { Link, json, useNavigate } from "react-router-dom"
import requestApi from './requestApi';
import { useState,useEffect} from 'react'; 

function Car({car}){
    const forumData=new FormData()
    const [image,setImage]=useState(car.pics[0])
    const url="http://localhost:3000/cars"
    const navigate=useNavigate()
    async function click(e){
        setImage(e.target.files[0])
      console.log(image)
    }
    async function submit(e){
        e.preventDefault()
        forumData.append("g",image)
      car.pics.push(forumData)
      console.log(forumData)
      await requestApi(`${url}/${car.id}`,"PATCH",{pics:image})
    }
return <div className="component">
  <div>
    <div style={{
    backgroundPosition:"center",
    backgroundSize:"cover", 
    width:"500px",
     height:"500px"}}>
       <a href={image}><img  alt="car image"src={image}style={{ width:"500px",
     height:"500px"}} /></a>

    </div>
    <div className="IMG" > 
    {car.pics.map((img)=><img onClick={()=>setImage(img)}id={`${car.pics.indexOf(img)}`} src={img} alt="car image" />)}
    
    </div>
    </div>
<div className="note" style={{border:"none"}}>
    <p><h1>{car.name} </h1></p>
    <br/>
<p>{car.Condition}<br/>{car.Price}</p>
<button className="buttonH" onClick={()=>navigate("/Home/contact")}>Apply</button>
</div>
<br/>
</div>


}
export default Car
/*<form onSubmit={submit}><div>
<label htmlFor={`${car.id}`} >cart</label>
  <input  type="file" name="m" id={`${car.id}`} onChange={async (e)=>await click(e)}/>
  </div>
  <button onSubmit={submit}>submit</button>
  </form>*/