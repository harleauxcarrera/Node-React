import React, {Component} from 'react';
import {connect} from 'react-redux';
import './main.css'

class Header extends Component{

//helper method to figure out what to show on the navbar depending on whether the user is loggedin or not
renderContent(){
  switch(this.props.auth){
    case null:
      return;

    case false:
      return (
        <li><a href = "/auth/google">Login With Google</a></li>
  );
    default:
      return <li><a>Logout</a></li>;
  }

}
  render(){
    return(
      <nav>
        <div className="nav-wrapper">
            <a className = "left brand-logo ">
                Carlos Emaily
            </a>
            <ul class="right">
              {this.renderContent()}
            </ul>
          </div>
      </nav>
    );
  }
}
      //map state to props function gets called w entire state object called out of the redux store
function mapStatesToProps({ auth }){
    return { auth };
}
//set up the connect component from react redux to connect to data Store
//pass the mapStatesToProps function to the connect function
export default connect(mapStatesToProps)(Header);
