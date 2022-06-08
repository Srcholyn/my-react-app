import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Mission from "./Pages/Mission/Mission";
import Project_timeline from "./Pages/Project_timeline/Project_timeline";
import Organization_chart from "./Pages/Organization_chart/Organization_chart";
import News from "./Pages/News/News";
import RnD_project from "./Pages/RnD_project/RnD_project";
import Co_operative from "./Pages/Co_operative/Co_operative";
import Careers from "./Pages/Careers/Careers";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/Mission">
          <Mission/>
        </Route>
        <Route path="/Project_timeline" exact>
          <Project_timeline/>
        </Route>
        <Route path="/Organization_chart" exact>
          <Organization_chart/>
        </Route>
        <Route path="/News" exact>
          <News/>
        </Route>
        <Route path="/RnD_project" exact>
          <RnD_project/>
        </Route>
        <Route path="/Co_operative" exact>
          <Co_operative/>
        </Route>
        <Route path="/Careers" exact>
          <Careers/>
        </Route>
        <Route path="/Contact" exact>
          <Contact/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
