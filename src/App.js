import {BrowserRouter as Router} from "react-router-dom"; 
import Counter from "./Counter"; 

function Home(){
  return <h2>Home</h2>
}

function App(){
  return (
    <Router>
      <nav>
        <link to= "/">Home</link>
        <link to= "/counter">Counter</link>
       </nav>
       <Route>
        <Route path ="/"element = {<Home/>}/>
        <Route path ="/counter" element = {<Counter />}> 
    </Route>
    </Router>
  );
}

export default Counter; 