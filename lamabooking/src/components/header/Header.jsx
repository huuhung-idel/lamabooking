import "./header.css"
import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {DateRange} from 'react-date-range';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import HouseIcon from '@mui/icons-material/House';

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");

  const [date, setDate] =  useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key:"selection",

    }
      
  ])

  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room:1,
  })

  const handleOption= (name, operation)=>{
    setOptions(prev=>{
      return{
        ...prev,
         [name]: operation ==="i" ? options[name] +1 : options[name] -1,

      }
    })
  }

  const navigate = useNavigate()
  const handleSearch = ()=>{
    navigate("/hotels" , {state:{destination, date , options}})
  }
  const handle404 = ()=>{
    navigate("/error" )
  }
  const handleContact =()=>{
    navigate("/contact")
  }
  const handleHome =()=>{
    navigate("/")
  }

  return (
    <div className="header">
      <div className={type==="list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
            <ul className="ulHeader">
              <li className="liHeader" onClick={()=>handleHome()}>
               
                <span className="iconHeader"><LocalHotelOutlinedIcon/></span>
                <span className="titleHeader">HOME</span>
              </li>
              <li className="liHeader">
                <span className="iconHeader"><AirplanemodeActiveIcon/></span>
                <span className="titleHeader">MESSAGE</span>
              </li>
              <li className="liHeader" onClick={()=>handleContact()}>
                <span className="iconHeader"><DirectionsCarIcon/></span>
                <span className="titleHeader">CONTACT</span>
              </li>
              <li className="liHeader" onClick={()=> handle404()}>
                <span className="iconHeader"><LocalTaxiIcon/></span>
                <span className="titleHeader">ERROR</span>
              </li>
              <li className="liHeader">
                <span className="iconHeader"><HouseIcon/></span>
                <span className="titleHeader">PRODUCT</span>
              </li>
            </ul>
        </div>

       { type !== "list" && 
         <> <h1 className="headerTitle">
          A lifetime of discount? It's  Genius
      
        </h1>
        <p className="headerDesc">
          Get rewarded for your travels - unclock instant saving  of 10% or 
          more with a free Booking.com account
        </p>
         <button className="headerBtn">
           Sign in/ Register
         </button>
         <div className="headerSearch">
            <div className="headerSearchItem">
              <HotelIcon className="headerIcon"/>
              <input type="text" placeholder="Where are you  going?"
              onChange={(e)=> setDestination(e.target.value)}
              className="headerSearchInput" />

            </div>
        
            <div className="headerSearchItem">
              <HotelIcon className="headerIcon"/>
              <span  onClick={()=>setOpenDate(!openDate)} className="headerSearchTex">{`${format(date[0].startDate, "MM//dd/yyyy")} 
               to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
              {openDate && 
              <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />}
            </div>
     
       
            <div className="headerSearchItem">
              <PersonAddIcon className="headerIcon"/>
              <span onClick={()=>setOpenOption(!openOption)} className="headerSearchTex">{`${options.adult} adult - ${options.children} children - ${options.room}`}</span>
                {openOption && <div className="options">
                  <div className="optionsItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                      disabled = {options.adult <= 1 }
                      className="optionCounterBtn" 
                      onClick={()=>handleOption("adult","d")}>-</button>
                      <span className="optinCounterNumber">{options.adult}</span>
                      <button className="optionCounterBtn" onClick={()=>handleOption("adult","i")}>+</button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button 
                      disabled = {options.children <= 0 }
                      className="optionCounterBtn" 
                      onClick={()=>handleOption("children","d")}>-</button>
                      <span className="optinCounterNumber">{options.children}</span>
                      <button className="optionCounterBtn" onClick={()=>handleOption("children","i")}>+</button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button 
                      disabled = {options.room <= 1 }
                      className="optionCounterBtn" 
                      onClick={()=>handleOption("room","d")}>-</button>
                      <span className="optinCounterNumber">{options.room}</span>
                      <button className="optionCounterBtn" onClick={()=>handleOption("room","i")}>+</button>
                    </div>
                  </div>
                </div>
                }
            </div>

            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>

            </div>
      
          </> }
        </div>
    </div>
    
  )
}

export default Header
