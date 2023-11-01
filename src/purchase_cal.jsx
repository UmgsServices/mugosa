import { useState } from "react"
const PurchaseData={
price:0,
deposite:0,
duration:365,
Daily:0
}

function Purchase_cal(){
    const [PData,setPData]=useState(PurchaseData)

    function getInput(item,key){
        let data;
        data=item[`${key}`]
      return String(data)
      }
      
  function OnFormChange(e){
        const id=e.target.id
        const item=PData;
       item[`${id}`]=e.target.value;
       setPData(item)
        console.log(item.price)
        e.target.value=item[`${id}`]
    }

return<form>
<input type="text"  minLength={3}onChange={(e)=>OnFormChange(e)}id="price"/>
<input type="color" onChange={(e)=>OnFormChange(e)} id="deposite"/><>{PData.price}</>
<input type="number" onChange={(e)=>OnFormChange(e)}  id="duration"/>
<input type="number"onChange={(e)=>OnFormChange(e)} id="Daily"/>


</form>
}
export default Purchase_cal