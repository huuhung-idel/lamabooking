import "./contact.css"
import theearth from '../../images/theearth.png'
import rightbanner from '../../images/rightbanner.png'
import { useNavigate } from "react-router-dom"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import FaceIcon from '@mui/icons-material/Face';
import { useState } from "react";


const Contact = () => {

    const [openChonghi, setOpenChonghi] = useState(true);
    const [openChuyenbay, setOpenChuyenbay] = useState(false);
    const [openTaxisanbay, setOpenTaxisanbay] = useState(false);
    const [openInsurance, setOpenInsurance] = useState(false);
    const handleChuyenbay = ()=>{
        setOpenChuyenbay(true);
        setOpenChonghi(false);
        setOpenInsurance(false);
        setOpenTaxisanbay(false);
    }
    const handleChonghi = ()=>{
        setOpenChuyenbay(false);
        setOpenChonghi(true);
        setOpenInsurance(false);
        setOpenTaxisanbay(false);
    }
    const handleTaxi = ()=>{
        setOpenChuyenbay(false);
        setOpenChonghi(false);
        setOpenInsurance(false);
        setOpenTaxisanbay(true);
    }
    const handleIn = ()=>{
        setOpenChuyenbay(false);
        setOpenChonghi(false);
        setOpenInsurance(true);
        setOpenTaxisanbay(false);
    }
    
  const navigate = useNavigate()
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

                <div class="nav__close" id="nav-close">
                    <i class='bx bx-x'></i>
                </div>
            </div>
        
          </nav>
    </header>

    <div className="Conatiner">
      <div className="topbanner">
          <div className="left_image">
              <img src={theearth} alt="" />
          </div>
          <div className="center_content">
            <h1 className="Title">Get instant discount</h1>
            <span className="Desc">Find hotel deals, home stays and more...</span>
            <span className="Desc">Just log in to your Booking.com account...</span>
          </div>
          <div className="right_image">
          <img src={rightbanner} alt="" />
          </div>
      </div>
  </div>

    <h1 className="scTitle">Welcome to the Help Center</h1>
    <span className="scText">Log in to contact Customer Service, we are available 24/7</span>
    <div className="supportcenter">
        <div className="boxlive">
            <div className="box_left">
                <div className="boxTitle"><PhoneEnabledIcon style={{margin:"5px"}}/>Live chat</div>
                <div className="boxText">Cách nhanh nhất để trao đổi với nhân viên Dịch vụ Khách hàng của chúng tôi về đặt phòng của bạn.</div>
            </div>
            <div className="box_right">
                <div className="boxTitle"><ChatBubbleOutlineIcon style={{margin:"5px"}}/> Gọi cho chúng tôi</div>
                <div className="boxText">Trong trường hợp khẩn cấp, bạn có thể gọi cho chúng tôi 24/7 bằng số địa phương hoặc quốc tế.</div>
            </div> 
        </div>
        <button className="contactlogin">Log in</button>
    </div>

    <h1 className="scTitle">Các câu hỏi thường gặp</h1>
    <div className="question">
         <div className="button_box">
            <div className="item_box" onClick={()=>handleChonghi()}>
                <MapsHomeWorkIcon />
                <button className="btnquestion">Chỗ nghỉ</button>
            </div>
            <div className="item_box" onClick={()=>handleChuyenbay()}>
                <AirplaneTicketIcon/>
                <button className="btnquestion">Chuyến bay</button>
            </div>
            <div className="item_box" onClick={()=>handleTaxi()}>
                <LocalTaxiIcon/>
                <button className="btnquestion">Taxi sân bay</button>
            </div>
            <div className="item_box" onClick={()=>handleIn()}>
                <FaceIcon/>
                <button className="btnquestion">Insurance</button>
            </div>
        </div>   
        <hr className="ke_ngang"/>
        <div className="detail_question">
            {openChonghi && (
                <div className="box_question">
                    <ul class="check-list">
                        <li className="li_item">Hỗ trợ các vấn đề liên quan đến virus corona</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Hủy phòng</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Thanh toán</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Trao đổi với khách</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Thẻ tín dụng</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Bảo nhận và nhận thức</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Chính sách hỗ trợ tiện nghi thêm</li>
                    </ul>
                </div>
            )
            }
            {openChuyenbay && (
                <div className="box_question">
                    
                        <ul class="check-list">
                            <li className="li_item">Hành lý</li>
                            <hr className="ke_list"/>
                            <li className="li_item">Thẻlên máy bay và thủ tục check in</li>
                            <hr className="ke_list"/>
                            <li className="li_item">Đặt chuyến bay</li>
                            <hr className="ke_list"/>
                            <li className="li_item">Thay đổi và hủy</li>
                            <hr className="ke_list"/>
                            <li className="li_item">Xác nhận</li>
                            <hr className="ke_list"/>
                            <li className="li_item">Đặt chuyến bay của tôi</li>
                            <hr className="ke_list"/>
                            <li className="li_item">Thông tin khách hàng</li>
                        </ul>
          
                </div>
            )
            }

            {openTaxisanbay && (
                <div className="box_question">
                    <ul class="check-list">
                        <li className="li_item">Quản lý đặt xe</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Hành trình</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Thông tin thanh toán</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Trợ năng và các tiện ích khác</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Giá cả</li>
                      
                     
                    </ul>
                </div>
            )
            }
            {openInsurance && (
                <div className="box_question">
                    <ul class="check-list">
                        <li className="li_item">Room Cancellation Insurance - Claims</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Room Cancellation Insurance - Coverage</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Room Cancellation Insurance - Policy terms</li>
                        <hr className="ke_list"/>
                        <li className="li_item">Room Cancellation Insurance - General</li>
                      
                    </ul>
                </div>
            )
            }

        </div>
    </div>
    
    <div className="footer_contact">
        <div className="fTitle_box">
           <span className="fTitle">Điều khoản và điều kiện</span>
           <span className="fTitle">Thông báo về Bảo mật & Cookie</span>
           <span className="fTitle">Về  Lamabooking.com</span>
        </div>
        <div className="fDesc">
            Bản quyền © 1996–2022 Lamabooking.com™. Bảo lưu mọi quyền.
        </div>
    </div>

  </div>
  )
}

export default Contact
