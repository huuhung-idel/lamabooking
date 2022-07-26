import "./login.css"
import CloseIcon from '@mui/icons-material/Close';
import Google from "../../images/google.png";
import Facebook from "../../images/facebook.png";
import Github from "../../images/github.png";
import { useNavigate } from "react-router-dom";


const Login = () => {
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
                                <h1 className="loginTitle">LOGIN WITH METHOD</h1>
                                <div className="wrapper">
                                    <div className="left">
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
                                    <div className="center">
                                        <div className="line"/>
                                        <div className="or">OR</div>
                                    </div>
                                    <div className="right">
                                        <input className="input_login" type="text" placeholder="User name"/>
                                        <input className="input_login" type="text" placeholder="password"/>
                                        <button className="btnSubmit">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                    </body>
                  
  )
}

export default Login
