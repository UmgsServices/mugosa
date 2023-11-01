

function ViewMode({ChangeMode,Data}){
   

return<div>
    <button type="button" onClick={(e)=>ChangeMode(e)} value={""}>ALL{"("+Data.filter((e)=>e.status.includes("")).length+")"}</button>
    <button type="button" onClick={(e)=>ChangeMode(e)} value={"Active"}>Active{"("+Data.filter((e)=>e.status.includes("Active")).length+")"}</button>
    <button type="button" onClick={(e)=>ChangeMode(e)} value={"Pending"}>Pending{"("+Data.filter((e)=>e.status.includes("Pending")).length+")"}</button>
<button type="button" onClick={(e)=>ChangeMode(e)} value={"Rejected"}>Rejected{"("+Data.filter((e)=>e.status.includes("Rejected")).length+")"}</button>
</div>
}
export default ViewMode