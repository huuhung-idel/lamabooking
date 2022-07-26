
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./page/home/Home";
import List from "./page/list/List";
import Hotel from "./page/hotel/Hotel";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import Error from "./page/error/Error404"
import Contact from "./page/contact/Contact"


function App() {
  return (
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/error" element={<Error/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/hotels" element={<List/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
