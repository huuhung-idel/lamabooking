import "./register.css"
import Google from "../../images/google.png"
import Facebook from "../../images/facebook.png"
import Github from "../../images/github.png"
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const handleIcon = () =>{
        document.querySelector('.search').classList.toggle('active')
    }
    const handleClear = ()=>{
        document.getElementById('mySearch').value = '';
        handleIcon();
    }
    const handleHonme =()=>
    {
        navigate('/');
    }
  return (
    <body>
    <div id="myid">
    <div className="logo_register">
        <div className="title_register" onClick={()=>handleHonme()}>lamabooking.com</div>
        <div className="search">
            <div className="icon" onClick={()=>handleIcon()}></div>
            <div className="input">
                <input type="text" placeholder="Search Here" id="mySearch"/>
            </div>
            <span className="clear" onClick={()=>handleClear()}><CloseIcon/></span>
        </div>
     
    </div>
    <div className="box_body">
        <div className="login">     
                <h1 className="registerTitle">REGISTER WITH METHOD</h1>
                <div className="wrapper_register">
                    <div className="right_register">
                        <input className="input_register" type="text" placeholder="User name..."/>
                        <input className="input_register" type="text" placeholder="Email..."/>
                        <input className="input_register" type="text" placeholder="Password..."/>
                        <input className="input_register" type="text" placeholder="Confirm password..."/>
                    </div>
                    <div className="center_register">
                        <button className="btnRe">Login</button>
                        
                    </div>
                    <div className="line_register"/>
                    <div className="left_register">
                            <div className="loginButton google">
                                <img src={Google} alt="" className="icon"/>
                                Google
                            </div>
                            <div className="loginButton facebook">
                                <img src={Facebook} alt="" className="icon"/>
                                Facebook
                            </div>
                            <div className="loginButton github">
                                <img src={Github} alt="" className="icon"/>
                                Github
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    </body>
  )
}
 
export default Register





