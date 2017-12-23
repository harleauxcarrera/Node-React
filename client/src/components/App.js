import React from 'react';
//BrowserRouter tells react router how to behave - changes components on screen
//Route object sets rule of what components will be visual on screen in a given URL
import {BrowserRouter, Route} from 'react-router-dom';
//create some dummy components
import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return(
    <div className = "container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path = "/" component={Landing} />
          <Route exact path = "/surveys" component={Dashboard} />
          <Route path = "/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
