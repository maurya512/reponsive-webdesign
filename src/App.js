// import dependencies
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import files
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import Navbar from './Navbar';

// App Component
function App() {
  return (
    <>
      <Navbar />
      {/* switch only renders the first route that matches/includes the path */}
      <Switch>
        {/* if the router detects a / it renders the Home component */}
        <Route exact path='/' component={Home} />
        {/* similar exact routes for other components */}
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Service} />
        <Route exact path='/contact' component={Contact} />4
      {/* if no valid path is a hit then render the user to home page */}
        <Redirect to={Home} />
      </Switch>
    </>
  );
}

// exporting the App component 
export default App;
