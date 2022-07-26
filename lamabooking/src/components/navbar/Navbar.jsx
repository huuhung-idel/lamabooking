
import { useNavigate } from "react-router-dom";
import "./navbar.css"



const Navbar = () => {
    const navigate = useNavigate()
    const handleLogin = ()=>{
      navigate("/login")
    }
    const handleRegister = ()=>{
        navigate("/register")
      }
    const hanldeHome = ()=>{
      navigate("/")
    }
  return (
      
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={()=>hanldeHome()}>lamabooking</span>
        <div className="navItems">
          <button className="navButton" onClick={()=>handleRegister()}>Register</button>
          <button className="navButton"onClick={()=>handleLogin()}>Login</button>
        </div>
      </div>
   
    </div>
     
  )
}

export default Navbar
