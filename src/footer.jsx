import Component from "./Home/component"
import logo from "./logo.png"
function Footer(){
    return <footer>
         <img className="logo-item1"src={logo} alt="logo" />
    <div className="note" style={{border:"none"}}>
        <h5>Headquaters</h5>
        <p>Flat9,Block10,nitel Quaters,wuse2,Abuja </p>
    </div>
    <br/>
    <div style={{border:"none",
display:"flex"
}}>
    <div className="note" style={{border:"none"}}>
        <h5>Quick links</h5>
        <div style={{listStyle:"none", color:"inherit"}}>
        <li>list a car</li>
        <li>get a car</li>
        <li>become a sponsor</li>
        </div>
    </div>
    <br/>
    
    <div className="note"style={{border:"none"}}>
        <h5>Support</h5>
        <div>08142387786 <br/>
        mugosaoffice"gmail.com</div>
    </div></div>
   <div style={{border:"none",
textAlign:"center"}}>@coprite Mugosa Africa. All Right Reserved</div> 
    
    </footer>
  
}
export default Footer