import Car from "./car"
import { useState,useEffect } from "react"
//import image from "./img/motorafrica_phone_mockup.png"
const cars =[{
    id:1,
    name:"Nissan Almera",
    pics:[],
    Price:"N3,300,000",
    Condition:"Nigerian used"
    },
   ]
function Cars(){
    const url="http://localhost:3000/cars"
    const [f,sf]=useState([])
    useEffect(()=>{
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
   
return <main className="Main">
   {f[0]!=null?f.map((car)=><Car key={`${f.indexOf(car)}`}car={car}/>):<>...looding cars</>}

</main>

}
export default Cars