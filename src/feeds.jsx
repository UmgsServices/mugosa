import {useState,useEffect} from 'react'
import requestApi from './requestApi';

function Feeds( {loginData,setPage}){
const [data,setData]=useState([])
const [Reply,setReply]=useState("")
const [View,setView]=useState("All")
const url='http://localhost:3000/feeds'
const year=new Date()
function getFullDate(){
    return year.getFullYear()+"/"+Number(year.getMonth()+1)+"/"+year.getDate()+"   "+year.getHours()+":"+year.getMinutes()+":"+year.getSeconds()
   }
async function getData() {
    try{
        const response= await fetch(url)
        const listitem= await response.json()
 
        if(loginData.logInType=="Employee"||loginData.logInType=="Admin"){setData(listitem)
            const view=listitem.filter((item)=>item.status==View)
            View!="All"?setData(view):setData(listitem)
        } 
        else {const display=listitem.filter((item)=>item.Username==loginData.username)
            const view=display.filter((item)=>item.status==View)
            View!="All"?setData(view):setData(display)
           }
           
        
    }catch(err){
     console.log(err)
    }
     
   }
   useEffect(()=>{
    getData()
   })
function AddReply(item){
if(item.status=="Active"&&Reply){
const reply={Username: loginData.username,
logInType:loginData.logInType,
id:item.replies.length!=0?item.replies[item.replies.length-1].id+1:1,
feed:Reply,
date:getFullDate()}
const text=JSON.stringify(reply)
    const feeds=[...item.replies,JSON.parse(text)]
    requestApi(`${url}/${item.id}`,"PATCH",{replies:feeds})
    console.log(data)
}else{alert("feed closed")}
setReply("")
}
function DeleteReply(item,reply){
    if(loginData.logInType=="Admin"||item.Username==loginData.username&&item.status=="Active"){
    const replies=item.replies.filter((f)=>f.id!=reply.id)
    console.log(replies)
    requestApi(`${url}/${item.id}`,"PATCH",{replies:replies})
}
else{alert("can only be deleted by admin")}
}
function DeleteFeed(item){
    requestApi(`${url}/${item.id}`,"DELETE")
    console.log(item.name)
}
function chaneStatus(item){
    requestApi(`${url}/${item.id}`,"PATCH",{status:"closed"})
}
function ChangeView(e){
setView(e.target.id)    
console.log(View)
}
    return<>
    <div className="feeds">
    <div className="feedBlock"
    style={{borderRadius:"0px", width:"100%", margin:"0", textAlign:"center"}}
    
    > <p
    style={{ textAlign:"left"}}
    ><button
    onClick={()=>setPage("page")}
    >Home</button></p>{View} Feeds
   
    </div>
    <button id="All"onClick={ChangeView}
    >All</button>
    <button id="Active"onClick={ChangeView}
    
    >Active</button>
    <button id='Closed' onClick={ChangeView}
    >Closed</button>
    <p>
        <h1>
            FEEDS
        </h1>
    </p>  

{
   data[0]? 
   data.map((item)=><>
     <div className="feedBlock">
        <p style={{textAlign:"right"}}>{loginData.logInType==("Admin"||"Employee")?<button onClick={()=>chaneStatus(item)} style={{border:"none", width:"70px"}}>{item.status}</button>:item.status}</p>
    <p style={{color:"rgb(137, 137, 159)"}}>

        {item.Username}{item.logInType=="Admin"?<>:{item.logInType}</>:null}
        <hr/>
    </p>
    <p>
    {item.feed}
    <hr/>
    </p>
    <p style={{textAlign:"right",color:"rgb(137, 137, 159)"}}>
         {item.date}
        <br/>
        {loginData.logInType=="Admin"?<>{item.name }<br/>
        {item.email}
        <br/>
        {item.number}
        <br/>
        {item.location}
        <br/>
        {item.service}
        </>:null}
    </p>
   {loginData.logInType==("Admin"||"Employee")?<button onClick={()=>DeleteFeed(item)}style={{border:"none", height:"0px", margin:"0"}}>Delete</button>:null}
    </div>
    {item.replies[0]?item.replies.map((reply)=><div className="replies">
    <p style={{textAlign:"right"}}>{item.status}</p>
    <p style={{color:"rgb(137, 137, 159)"}}>
        {reply.Username}{reply.logInType=="Admin"?<>:{reply.logInType}</>:null}
        <hr/>
    </p>
    <p>
    {reply.feed}
    <hr/>
    </p>
    <p style={{textAlign:"right",color:"rgb(137, 137, 159)"}}>
        {reply.date}
    </p>
    <button onClick={()=>DeleteReply(item,reply)}style={{border:"none", height:"0px", margin:"0"}}>Delete</button>
    </div>):null}
    <textarea value={Reply}onChange={(e)=>setReply(e.target.value)}className="replies" cols={40} rows={3} placeholder='reply'></textarea>
    <br/>
    <button style={{
        color:"black",
        borderRadius:"5px",
marginTop: "5px",
opacity: "0.8",
border:"0.1em solid rgb(228, 226, 226)" ,
backgroundColor: "rgb(249, 249, 250)",
boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)"
    }}
onClick={()=>AddReply(item)}
    >reply</button>
    </>):<p
    style={{
        color:"wheat",
        fontSize:"50px"
    }}
    
    >feeds is empty</p>
}
</div>
    </>

}
export default Feeds