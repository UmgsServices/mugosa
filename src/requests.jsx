import ViewMode from "./ViewMode";
import Drivers from "./Drivers";
import {useEffect, useState} from "react"


function ViewRequests({Data,HandleView}){
    const url="http://localhost:3000/Data"
    const [f,sf]=useState([])
    useEffect(()=>{
        const initial=f;
    async function getData() {
        try{
            const response= await fetch(url)
            const listitem= await response.json()
           sf(listitem)
            
        }catch(err){
         console.log(err)
        }
         
       }
       getData()
    }
    )
    const [Viewmode,SetViewMode]=useState("")
   const View=f.filter((e)=>e.status.includes(Viewmode))
  
    const year=new Date();
    const ChangeMode=(event)=>{
        SetViewMode(event.target.value)
        console.log(Boolean(View[0]))
     }
    function getInput(item,$key){
        let data;
        item.map(([key,value])=>key==$key?data=value:null)
    return data
    }
   
   return<div >
        <ViewMode
        ChangeMode={ChangeMode}
        Data={f}/>
        { View[0]&&<Drivers
            View={View}
           getInput={getInput}
           HandleView={HandleView}
            />||<>no {Viewmode} Drivers yet</>
        }
    </div>
}
export default ViewRequests