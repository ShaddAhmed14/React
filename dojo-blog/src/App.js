import Navbar from './navbar';
import Home from './homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Creat';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className='content'>
            <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/create"> <Create /> </Route>
            <Route exact path="/blogs/:id"> <BlogDetails /> </Route>
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;

/* NOTES
- The exact parameter is so component called for EXACT match. Else both / and /create would lead to home
- Making it /blogs/:id means the :id part is changeable

*/
