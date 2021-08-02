import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RawMaterialConsumption from './components/RawMaterialConsumption'
import Production from './components/Production'
import './assets/bootstrap.css'
import './App.css'


function App() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <Router>
        <div className="menu">
          <div class="arrow-left position-absolute cursor" onClick={() => setMenu(true)}></div>
          {menu && <div className="menu-list position-absolute" >
            <div class="arrow-right position-absolute cursor" onClick={() => setMenu(false)}></div>
            <ul className="pt-3">
              <li><Link to='/'>Расход сырья</Link></li>
              <li><Link to='/production'>Производства</Link></li>
            </ul>
          </div>}
        </div>
        <Switch>
          <Route path="/" exact>
            <RawMaterialConsumption />
          </Route>
          <Route path="/production">
            <Production />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
