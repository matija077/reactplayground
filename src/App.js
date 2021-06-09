
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//components
import NavigationBar from './components/NavigationBar.js';
import Home from './components/Home';
import MasterForm from './components/Form';
import Tablica from './components/Table';
import Playground from './components/Playground';

//stylesheet
import "./App.css"


function App () {
  const [state, setState] = useState(0);

  useEffect(() => {
    setTimeout( () => {
      setState( (p) => 2);
    }, 4000)
  }, [])



  return (


      <Router>
       		<NavigationBar/>

		<Switch>

            <Route path="/form">
            	<MasterForm/>
            </Route >

			<Route path="/table">
            	<Tablica>
                <>
                  <div>
                    <>
                      <p>asd</p>
                      <FC />
                    </>
                  </div>
                  <FC />
                  <div>
                    test
                  </div>
                </>
              </Tablica>
            </Route >

            <Route path="/playground">
            	<Playground/>
            </Route >


			<Route>
			    <Home/>
             </Route>

        </Switch>

      </Router>


  )
}



  export default App;

  function FC() { return (<div>"custom"</div>)};




  /* - home is at the end of the router and IN switch so if no path (previous links) is loaded,
   it loads the one without defined path (home)
   - without switch router would load every component with or without path, but with switch
   just the 1st one loads and the other ones don't
*/