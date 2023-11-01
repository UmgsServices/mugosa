

function Drivers({View,getInput,HandleView}){
   
  return<>{ View.map((item)=> <table rules="none" border={1} style={{width:"110%",margin:"50px auto"}} key={item.id}>
         <tr>
             <td colSpan={2} style={{textAlign:"center"}}>
              interview number:{item.id}
             </td>
            
         </tr>
         <tr  >
             <td>
              New Driver:{getInput(item.data,"FirstName")}
             </td>
             <td rowSpan={2}>
                 status:{item.status}
             </td>
            
         </tr>
         <tr>
         <td >
             Brought By:{getInput(item.data,"BroughtBy")}
             </td>
         </tr>
         <tr>
             <td colSpan={2} >
               interviewed on:{item.date}<button onClick={()=>HandleView(item)}>View</button>
             </td>
         </tr>
     </table>)}</>
     
     }
     export default Drivers