
import "./Regiter.css"


function Register({FormData,setFormData,HandleSubmit,HandleDelet}){
   
function setInput($key,$value){
    const data=FormData;
 data.forEach((e)=>e[0]==$key?e[1]=$value:e[1]=e[1])
setFormData(data)
}
function HandleChange(e){
    const id =e.target.id
    const value=e.target.value
   
setInput(id,value)

}
return <div className="main"> 

<form
onSubmit={(e)=>{HandleSubmit(e)} } 
>
<h1 style={{margin:"0 auto 20px auto"}}>Driver interview</h1>
<label>Brought by:
<input onChange={(e)=>HandleChange(e)}className="Form"id="BroughtBy"type="text"/></label>  

<p className="lebel">name:</p>
<div className="name">   
<input required={true}onChange={(e)=>HandleChange(e)}className="Form"id="FirstName"type="text"/>
<input onChange={(e)=>HandleChange(e)}className="Form"id="SurName"type="text"/>
<input onChange={(e)=>HandleChange(e)}className="Form"id="MiddleName"type="text"/></div>
<p className="lebel">Phone Number:</p>
<input onChange={(e)=>HandleChange(e)}className="Form"id="PhoneNumber"/>
<p className="lebel">Address:</p>
<div className="address">
<input onChange={(e)=>HandleChange(e)}className="Form"id="Address1"type="text"/>
<input onChange={(e)=>HandleChange(e)}className="Form"id="Address2"type="text"/>
</div>
<p className="lebel">Home Town:</p>
<div className="address">
<select onChange={(e)=>HandleChange(e)}className="Form"id="stateOfOrigine">
    <option></option>
</select>
<input onChange={(e)=>HandleChange(e)}className="Form"id="local" type="text"/>
</div>
<p className="lebel">What was last job:</p>
<input onChange={(e)=>HandleChange(e)}className="Form"id="LastJob " type="text"/>
<p className="lebel">Reason for leaving last job:</p>
<input onChange={(e)=>HandleChange(e)}className="Form"id="Reason" type="text"/>
<p className="lebel">your job experiance:</p>
<input onChange={(e)=>HandleChange(e)}className="Form"id="JobExperiance" type="text"/>
<p className="lebel">do you know Abuja routes:</p>
<div className="radio">
<input onChange={(e)=>HandleChange(e)}className="select"value="yes" id="Routes"name="AbujaRoutes" type="radio"/>
<input onChange={(e)=>HandleChange(e)}className="select"value="none" id="Routes"name="AbujaRoutes"type="radio"/>
</div>
<p className="lebel">driving Experince:</p>
<div className="radio">
<input onChange={(e)=>HandleChange(e)}className="select" name="driveExperinace"value="bolt" id="Experiance"type="radio"/>
<input onChange={(e)=>HandleChange(e)}className="select"name="driveExperinace" value="taxi"id="Experiance"type="radio"/>
<input onChange={(e)=>HandleChange(e)}className="select" name="driveExperinace" value="uber"id="Experiance"type="radio"/>
<input onChange={(e)=>HandleChange(e)}className="select" name="driveExperinace"value="others"id="Experiance" type="radio"/>
</div>
<p className="lebel">academec status:</p>
<input onChange={(e)=>HandleChange(e)}className="Form" id="Academic" type="text"/>
<p className="lebel">do you have drivers linscence:</p>
<div className="radio">
<input onChange={(e)=>HandleChange(e)}className="select" name="driverlinscence" value="yes"id="Driver"type="radio"/>
<input onChange={(e)=>HandleChange(e)}className="select" name="driverlinscence" value="no"id="Driver"type="radio"/>
</div>
<p className="lebel">do you have a guarantor:</p>
<div className="radio">
<input onChange={(e)=>HandleChange(e)}className="select" name="guarantor"value="yes"id="Guarantor" type="radio"/>
<input onChange={(e)=>HandleChange(e)}className="select"name="guarantor" value="no"id="Guarantor"type="radio"/>
</div>
<div className="button">

<button type="button"onClick={HandleDelet} >clear</button>
<button type="reset" onClick={(e)=>HandleSubmit(e)}>submit</button>
</div>

</form></div>
}
export default Register