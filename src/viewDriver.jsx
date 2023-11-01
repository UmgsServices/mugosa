import "./viewDriver.css"
import RegisterStatus from "./RegisterStatus"

function View({ToDisplay,getInput,Data,setData}){

    const display= ToDisplay.data!=null? [
        "Brought by: "+getInput(ToDisplay.data,"BroughtBy"),
        "Full Name: "+getInput(ToDisplay.data,"FirstName")+" "+getInput(ToDisplay.data,"SurName"),
        "Phone Number: "+getInput(ToDisplay.data,"PhoneNumber"),
        "Residential Address: "+getInput(ToDisplay.data,"Address1"),
        "Permanent address: "+getInput(ToDisplay.data,"StateOfOrigin")+", "+getInput(ToDisplay.data,"Local"),
        "Last Job: "+getInput(ToDisplay.data,"LastJob"),
        "Reason For Leaving Last job: "+getInput(ToDisplay.data,"Reason"),
        "job Experiance: "+getInput(ToDisplay.data,"JobExperiance"),
        "Abuja Routes: "+getInput(ToDisplay.data,"Routes"),
        "Type of Driving Experiance: "+getInput(ToDisplay.data,"Experiance")+" driving",
        "Academic Status: "+getInput(ToDisplay.data,"Academic"),
        "Drivers Linces: "+getInput(ToDisplay.data,"Driver"),
        "Guarantor: "+getInput(ToDisplay.data,"Guarantor") 
    ]:["no items to display"]

return<>


<div className="Display">
    <p>
        <h1>
            Driver interview report
        </h1>
    </p>  
{
    display.map((item)=><>
    <p>
        {item}
    </p>
    </>)
}
<RegisterStatus
ToDisplay={ToDisplay}
Data={Data}
setData={setData}
/>

</div>


</>


}
export default View