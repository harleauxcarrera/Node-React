import React, {Component} from 'react';
//Import Landing object from js file
import Landing from './Landing';
//BrowserRouter tells react router how to behave - changes components on screen
//Route object sets rule of what components will be visual on screen in a given URL
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;


class App extends Component {

    componentDidMount() {
      this.props.fetchUser();
    }

  render(){
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
  }
};

export default connect(null, actions) (App);
