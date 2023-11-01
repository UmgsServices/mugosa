import "./login.css"
import { useState,useEffect } from 'react';

import SignUp from "./sinup";

const user={
    username:"",
    password:""
}
function Login({loginData,setlogin,setPage}){
    const url= 'http://localhost:3000/Users'
    const [Users,setUsers]=useState([])
    const [newUser,setNewUser]=useState(user)
    
    async function getData() {
        try{
            const response= await fetch(url)
            const listitem= await response.json()
            setUsers(listitem)
            
        }catch(err){
         console.log(err)
        }
         
       }
       useEffect(()=>{
        getData()
       },[])
       function HandleChange(e){
        getData()
        const id=e.target.id
        const feed=newUser
        feed[`${id}`]=e.target.value
        setNewUser(feed)
        console.log(newUser)
    }
    function goLogin(){
        getData()
        const logger=Users.filter((e)=>e.username==newUser.username)
         if(!logger[0])d("signup")
         else if(logger[0].password==newUser.password){
        setlogin(logger[0])
        console.log(loginData)
        alert("correct")
        setPage("page")
        }
        else {
            alert("data is not correct")
        }
        
        console.log(newUser)

    }
    function goSignUp(){
setPage("signup")
    }

    return<div className="login-container"  id="ghj">	
<p>login</p>
    
<input  onChange={HandleChange} id="username" placeholder="Username"type="text" />
<input  minLength={4}onChange={HandleChange}id="password"placeholder="Password"type="password" />
    <br/>
<button className="button"style={{width:"100%", textDecoration:"underline", textAlign:"center"}}>forgot password</button>

<div className="click">
<button className="button"onClick={goLogin}>login</button>
<button className="button" onClick={goSignUp}>signup</button>
	</div>
	</div>

}
export default Login