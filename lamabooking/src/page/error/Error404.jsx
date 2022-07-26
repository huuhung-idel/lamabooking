import { useNavigate } from "react-router-dom";
import "./assets/css/styles.css";
import ma from './assets/img/ghost-img.png';


const Error404 = () => {
    let navigate = useNavigate();
    const handleHome = ()=>{
        navigate("/")
    }
    const  handleLogin = ()=>{
        navigate("/login")
    }
    const handleContact =()=>{
        navigate("/contact")
    }
  return (
  <div>
    <header class="header404">
        <nav class="nav__container">
        <a  class="nav__logo">
            LAMABOOKING
        </a>
        <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
                <li class="nav__item">
                    <a  class="nav__link" onClick={()=>handleHome()}>HOME</a>
                </li>
                <li class="nav__item">
                    <a  class="nav__link" onClick={()=>handleLogin()}>LOGIN</a>
                </li>
                <li class="nav__item">
                    <a  class="nav__link" onClick={()=>handleContact()}>CONTACT</a>
                </li>
            </ul>
        </div>

     </nav>
    </header>
         <div class="main">
     
         <section class="home">
             <div class="home__container container">
                 <div class="home__data">
                     <span class="home__subtitle">Error 404</span>
                     <h1 class="home__title">Hey Buddy</h1>
                     <p class="home__description">
                         We can't seem to find the page you are looking for.
                     </p>
                     <a href="#" class="home__button" onClick={()=>handleHome()}>
                         Go Home
                     </a>
                 </div>

                 <div class="home__img">
                     <img  src={ma} alt=""/>
                     <div class="home__shadow"></div>
                 </div>
             </div>

             <footer class="home__footer">
                 <span>(554) 987-654</span>
                 <span>|</span>
                 <span>lammabooking@company.com</span>
             </footer>
         </section>
     </div>
     </div>



  )
}

export default Error404