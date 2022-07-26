import "./mailList.css"

const MailList = () => {
  return (
    <div className="Mail">
        <h1 className="mailTitle">
            Save time, save mobney
        </h1>
        <span className="mailDesc">
            Sign upand we'll send the best deals to you
        </span>
        <div className="mailInputContainer">
            <input type="text"  placeholder="Your Email"/>
            <button>Subcribe</button>
        </div>

        
    </div>
  )
}

export default MailList