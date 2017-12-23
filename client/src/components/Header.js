import React, {Component} from 'react';


class Header extends Component{
  render(){
    return(

<nav>
  <div className="nav-wrapper">
      <a className = "left brand-logo ">
          Carlos Emaily
      </a>
      <ul class="right">
        <li>
          <a>Log In with Google</a>
        </li>
      </ul>
    </div>
</nav>
    );
  }
}

export default Header;
