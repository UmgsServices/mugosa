

const requestApi= async (url="",method="",body={})=>{
const updateobj={
    method:method,
    headers:{"Content-Type":'application/json'},
    body:JSON.stringify(body)
}
const obj=method=="DELETE"?{method:"DELETE"}:updateobj
try{
const result= await fetch(url,obj)
if (!result.ok) throw Error("reload page")
}
catch{

}
}

export default requestApi