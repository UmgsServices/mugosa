import { useState, } from 'react'; 
import Login from './login.jsx'
import SignUP from './sinup.jsx';
import Feeds from './feeds.jsx';
import Page from './page.jsx';
import Home from './Home/Home.jsx'
import ContactUs from './Home/contact.jsx';
import Header from './header.jsx';
import Component from './Home/component.jsx';
const user={
  username:"",
  name:"",
  email:"",
  number:"",
  password:"",
  logInType:""
}

function App(){
const [loginData,setlogin]=useState(user)
const [page,setPage]=useState("page")

let pag=<Page loginData={loginData} setPage={setPage}/>
switch(page){
case "login" :pag=<Login
loginData={loginData}
setlogin={setlogin}
setPage={setPage}/>
break
case "signup" :pag=<SignUP
setPage={setPage}
/>
break
case "page":pag=<Page loginData={loginData} setPage={setPage}/> //<Feeds loginData={loginData}/> 
break
case "feeds":pag=<Feeds
  loginData={loginData}
  setPage={setPage}
/>
}
  return pag
  
  //<Page loginData={loginData} setPage={setPage}/>
  }
export default App;



