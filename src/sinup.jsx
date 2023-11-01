import "./Home/home.css"
import "./Regiter.css"
import requestApi from "./requestApi"
import {useState,useEffect} from "react"
const user={
    username:"",
    name:"",
    email:"",
    number:"",
    password:"",
    logInType:""
}
function SignUp({setPage}){
    const url= 'http://localhost:3000/Users'
    const [newUser,setNewUser]=useState(user)
    const [Users,setUsers]=useState([])
    const [Error,setError]=useState("")
useEffect(()=>{
    const use=Users.filter((e)=>e.username==newUser.username)
        if(use[0])setError("Username")
       else if(Users.filter((e)=>e.email==newUser.email)[0])setError("Email")
       else if(Users.filter((e)=>e.number==newUser.number)[0])setError("Phone Number")
       else{setError("no")}
}
)
    async function getData() {
        try{
            const response= await fetch(url)
            const listitem= await response.json()
            setUsers(listitem)
            
        }catch(err){
         console.log(err)
        }
         
       }
    function HandleSubmit(e){
        getData()
        e.preventDefault()
        if (Error=="no"){
       
        const user={
        username:newUser.username, 
        id:Users.length+1,
        name:newUser.name,
        email:newUser.email,
        number:newUser.number,
        password:newUser.password,
        logInType:"visitor"
        }
        const text=JSON.stringify(user)
        const feeds=[...Users,JSON.parse(text)]

        requestApi(url,"POST",JSON.parse(text))
        setUsers(feeds)
    console.log(feeds)
    setPage("login")
        }
        else{alert(`${Error} already taken`)}
    }
    function HandleChange(e){
        getData()
        
        const id=e.target.id
        const feed=newUser
        feed[`${id}`]=e.target.value
        setNewUser(feed)
        console.log(Users.filter((e)=>e.username==newUser.username))
        
    }
    
    return  <div className="component"
    style={{
        width:"80%",
    textAlign:'center',
	margin: "100px auto",
	placeItems: "center",
	boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
	opacity:" 0.8",
	display:"block",
    }}>
    <form onSubmit={HandleSubmit}
    style={{
        border:"none",
        backgroundColor:"inherit"
    }}>
        <h2 style={{textAlign:"center"}}>Sign Up</h2>
   <br/>
    <input required onChange={HandleChange} id="username" placeholder="Username*"type="text" />
    <input required onChange={HandleChange} id="name" placeholder="Your Name*"type="text" />
    <input required onChange={HandleChange}id="email"placeholder="Email Address*"type="email" />
    <input required maxLength={11} onChange={HandleChange}id="number" placeholder="Your Phone Number*"type="text" />
    <input required minLength={4}onChange={HandleChange}id="password"placeholder="Password*"type="password" />
    <button  style={{
        margin:"25px auto",
        width:"150px",
        backgroundColor:"green",
        height:"35px",
        borderRadius:"5px",
        border:"none",
        cursor:"pointer",
        fontSize:"13px",
        color:"white"
    }}>signup</button>
    </form>
    </div>
  
    }
    export default SignUp