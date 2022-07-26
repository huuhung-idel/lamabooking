import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from "react"
import { format } from "date-fns";
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"

const List = () => {
  
const locations = useLocation()
const [destination, setDestination] = useState(locations.state.destination);
const [date, setDate] = useState(locations.state.date);
const [openDate, setOpenDate] = useState(false);
const [options, setOptions] = useState(locations.state.options);
  return (
    <div>
        <Navbar/>
        <Header type="list"/>
        <div className="listContainer">
              <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="listTitle">Search</h1>
                  <div className="lsItem">
                    <label>Destination</label>
                    <input type="text" placeholder={destination} />
                  </div>
                  <div className="lsItem">
                    <label>Check-in Date</label>
                    <span onClick={()=>setOpenDate(!openDate)}>
                    {`${format(date[0].startDate, "MM//dd/yyyy")} 
                          to ${format(date[0].endDate,"MM/dd/yyyy"
                      )}`}
                    </span>
                    {openDate && (
                    <DateRange
                    onChange={(item)=> setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                    />
                    )}
                  </div>
                  <div className="lsItem">
                    <label>Options</label>
                    <div className="lsOptions">
                    <div className="lsOptionItem">
                      <span className="lsOptionTe">Min price<small>per night</small></span>
                      <input type="number" className="lsOptionInput" />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionTe">Max price<small>per night</small></span>
                      <input type="number" className="lsOptionInput" />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionTe">Adult</span>
                      <input type="number"  min={1} className="lsOptionInput" placeholder={options.adult} />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionTe">Children</span>
                      <input type="number" min={0} className="lsOptionInput"  placeholder={options.children}/>
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionTe">Room</span>
                      <input type="number"   min={1} className="lsOptionInput"  placeholder={options.room}/>
                    </div>
                    </div>
                  </div>
                  <button>Search</button>
                </div>

                <div className="listResult">
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                </div>
              </div>
        </div>
    </div>
  )
}

export default List
