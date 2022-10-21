import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import user from "./dataDummy/dataDummy";



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {user.map((item,index) => {
            return(
              <div key={index} style={{display:"flex", backgroundColor:"black", marginBottom:"5px"}}>
                <img className="rounded-5" style={{height:"75px"}} src={item.image} alt=""/>
                <div className="text-white" style={{color:"white"}}>
                  <a>{item.username}</a>
                  <p>{item.follower}</p>
                  <p>{item.following}</p>
                </div>
                
              </div>

            )
          })}
          
        </div>
        <Routes>
          <Route exact path='/profile/:id'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
