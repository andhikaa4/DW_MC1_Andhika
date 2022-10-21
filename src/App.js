import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";



function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/profile/:id' element={<Profile/>}/>
        </Routes>
      </Router>
  );
}

export default App;
