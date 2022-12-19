import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/Create";
import BlogDetails from "./Components/BlogDetails";

function App() {
  // const link = 'http://www.google.com';
  // const obj = {name: 'Ayush', age: 21}
  return (
    //   JSX allows us to use variables . It converts all values to string and displays . All variables except objects and booleans are displayed .
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
