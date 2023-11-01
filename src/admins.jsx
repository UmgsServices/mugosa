import './index.css'
import Register from './register';
import Main from './Home/Home';
import ViewRequests from './requests';
import View from './viewDriver'
import Cars from './cars/Cars';
import Header from "./header"
import Footer from "./footer"
import { useState,useEffect } from 'react'; 
import requestApi from './requestApi';
import {Navigate, Route, Routes,useNavigate} from 'react-router-dom';
const input=[
    ["BroughtBy",""],
    ["FirstName",""],
    ["SurName",""],
    ["MiddleName",""],
    ["PhoneNumber","0"],
    ["Address1",""],
    ["Address2",""],
    ["StateOfOrigine",""],
    ["Local",""],
    ["LastJob",""],
    ["Reason",""],
    ["JobExperiance",""],
    ["Routes",""],
    ["Experiance",""],
    ["Academic",""],
    ["Driver",""],
    ["Guarantor",""]
  ]
  const Datat=[
    {
      id:1,
      data:input,
      status:"Pending",
      date:5656,
      edited:"",
      type:""
    }
  ]
  const url="http://localhost:3000/Data"
  const year=new Date();
  const [f,sf]=useState(Datat)
 const initial=JSON.parse(localStorage.getItem("data")||JSON.stringify([]));
  const [FormData,setFormData]=useState(input)
 const [Data,setData]=useState(initial)
 const [ToDisplay,setDisplay]=useState([])
 
 const navigate=useNavigate();
 async function getData() {
  try{
      const response= await fetch(url)
      const listitem= await response.json()
      sf(listitem)  
  }catch(err){
   console.log(err)
  }
   
 }
 useEffect(
  ()=>{
    localStorage.setItem("data",JSON.stringify(Data))
    console.log(Data)
    getData()
  },[Data,setData]
 )
 function getInput(item,$key){
  let data;
  item.map(([key,value])=>key==$key?data=value:null)
return String(data)
}
 function getFullDate(){
  return year.getFullYear()+"/"+Number(year.getMonth()+1)+"/"+year.getDate()+"   "+year.getHours()+":"+year.getMinutes()+":"+year.getSeconds()
 }
 const b=useNavigate()
  function HandleSubmit(e){
    e.preventDefault()
    //setData(JSON.parse(localStorage.getItem("data")||JSON.stringify("")))
    const d =JSON.stringify(FormData)
   const s={
    id:Data.length<0?1:Data.length+1,
    data:JSON.parse(d),
    status:"Pending",
    date:getFullDate(),
    edited:""
  }
    const flex=[...Data,s]
    
    setData(flex)
   setDisplay(s)
   console.log(Data)
   requestApi(`${url}`,"POST",s)
   navigate("/viewDriver")
   
  
  }
  function HandleDelet(){
   
    setData([])
  }
  function HandleView(item){
    alert("dkcbhjn")
    setDisplay(item)
    navigate("/viewDriver")
}
function Admins(){
    return<>
    <div className="app">
    <Routes>
  <Route  path='/' element={
    <Main/>
  } />
  <Route   path='/viewDriver' element={
     <View
     ToDisplay={ToDisplay}
     getInput={getInput}
     Data={Data}
     setData={setData}
   />
  } />
  <Route  path='/requests' element={
    <ViewRequests
    Data={Data}
    HandleView={HandleView}
  />
  } />
  <Route  path='/register' element={
    <Register
    FormData={FormData}
    setFormData={setFormData}
    HandleSubmit={HandleSubmit}
    HandleDelet={HandleDelet}
  />
  } />
  <Route  path='/cars/Cars' element={
    <Cars/>
  } />
    </Routes>
    </div>
    </>
    
}
export default Admins