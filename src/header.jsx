import logo from "./logo.png"
import { useState } from "react"
import './index.css'
import {useNavigate} from 'react-router-dom'
const UseCase=["Private car users","Car subscription/ ehailing","Logistics & delivery","Public transportation","Haulage & trucking","Corporate transportation"]
const MenueList=["Home","About-us","Use Case","Contact Us","Feeds","Login"] 

function Header({loginData,setPage}){
const [showMenue,setshowMenue]=useState("none")
const [showSubMenue,setshowSubMenue]=useState("none")
const [menu,setmenue]=useState(`rotateZ(90deg)`)
const navigate=useNavigate()

function Nav(item){
    item=="Home"?navigate("/"):null
    item=="Contact Us"?navigate("/Home/contact"):null
    item=="Login"?setPage("login"):null
    item=="Feeds"?setPage("feeds"):null
    showMenue=="none"? setmenue(`rotateZ(0deg)`):setmenue("rotateZ(90deg)")
    showMenue=="none"?setshowMenue("initial"):setshowMenue("none")
    setshowSubMenue("none")
}
function i(item){
    if(item==="Use Case"){
        return  <><li key={item} onClick={()=>showSubMenue=="none"?setshowSubMenue("block") :setshowSubMenue("none") }  >{item}</li>
        <ul style={{display:showSubMenue,cursor:"pointer" }}>    {UseCase.map((e)=><li key={e}   >{e}</li>)} </ul>
        </>
    }
    else return <li onClick={()=>Nav(item)} key={item}>{loginData.username&&item=="Login"?"Log Out":item}</li>
    }
    function HandleMenue(){
        showMenue=="none"? setmenue(`rotateZ(0deg)`):setmenue("rotateZ(90deg)")
        showMenue=="none"?setshowMenue("initial"):setshowMenue("none")
        setshowSubMenue("none")
    }
    function DisplayList(){
      return  MenueList.map((item)=>i(item))
    }
    
    
    return <header>
        <div className="logo">
        <img className="logo-item1"src={logo} alt="logo" />
       <button className="logo-item2" onClick={HandleMenue} style={{ cursor:"pointer", transform:`${menu}`}}>|||</button>
       </div>
       
       <ul className="menue"style={{display:showMenue,cursor:"pointer",border:"none",transition:"display 3s"}}>{DisplayList()}</ul>
     
    </header>
}
export default Header