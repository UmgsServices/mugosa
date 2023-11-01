import image from "./img/motorafrica_phone_mockup.png"
import { Link } from "react-router-dom"
import {useState,useEffect} from "react"
import requestApi from "../requestApi"
import {useNavigate} from 'react-router-dom'
import Login from "../login"
const contact={
    name:"",
    email:"",
    number:"",
    location:"",
    feed:"",
    service:""
}
function ContactUs({loginData,setPage}){
const [newFeed,setNewFeed]=useState(contact)
const [Contacts,setContacts]=useState([])
const url='http://localhost:3000/feeds'
const year=new Date()
const navigate=useNavigate()
async function getData() {
    try{
        const response= await fetch(url)
        const listitem= await response.json()
        setContacts(listitem)  
    }catch(err){
     console.log(err)
    }
     
   }
   useEffect(()=>{
    getData()
   },[])
   function getFullDate(){
    return year.getFullYear()+"/"+Number(year.getMonth()+1)+"/"+year.getDate()+"   "+year.getHours()+":"+year.getMinutes()+":"+year.getSeconds()
   }
function HandleSubmit(e){
    getData()
    if (loginData.username){
    e.preventDefault()
    const contact={
    Username:loginData.username,
    id:Contacts.length+1,
    name:newFeed.name,
    email:newFeed.email,
    number:newFeed.number,
    location:newFeed.location,
    service:newFeed.service,
    logInType:loginData.logInType,
    status:"Active",
    feed:newFeed.feed,
    date:getFullDate(),
    replies:[]
    }
    const text=JSON.stringify(contact)
    const feeds=[...Contacts,JSON.parse(text)]
    requestApi(url,"POST",JSON.parse(text))
    alert(`Dear ${loginData.username} your feed has been recieved sucessfuly you will be contacted shortly`)
setPage("feeds")
}
else { alert("Please login first") 
setPage("login")}


}
function HandleChange(e){
    getData()
    const id=e.target.id
    const feed=newFeed
    feed[`${id}`]=e.target.value
    setNewFeed(feed)
    console.log(newFeed)
}

return <div className="component">
<form onSubmit={HandleSubmit}
style={{border:"none",
backgroundColor:"inherit"}}>
    <h2 style={{textAlign:"center"}}>Looking For Support?</h2>
<p style={{
    textAlign:"center",
    marginBottom:"30px"
}}>
    Tell us which of our services intrest you and we would reachout to you as soon 
    as possible or call 08142387786
    </p>
<input required onChange={HandleChange} id="name" placeholder="Your Name*"type="text" />
<input required onChange={HandleChange}id="email"placeholder="Email Address*"type="email" />
<input required maxLength={11} onChange={HandleChange}id="number" placeholder="Your Phone Number*"type="text" />
<select onChange={HandleChange} id="service" >
    <option >select the service you would like</option>
    <option >Purchase</option>
    <option >car hire</option>
</select>
<input required onChange={HandleChange}id="location"placeholder="Location*"type="text" />
Describtion
<textarea id="feed" onChange={HandleChange} cols={2}rows={7} style={{resize:"none",fontSize:"15px", padding:"3px"}} ></textarea>
<button  style={{
    margin:"25px 0px",
    width:"150px",
    backgroundColor:"green",
    height:"35px",
    borderRadius:"5px",
    border:"none",
    cursor:"pointer",
    fontSize:"13px",
    color:"white"
}}>Send Your Message</button>
</form>
</div>

}
export default ContactUs