import React from 'react';

//basic compnonet setup, style tag uses two sets of curly braces: one to indicate js , other for object passed in
const Landing = () => {
  return (
    <div style = {{textAlign: 'center'}}>
      <h1>
      Welcome to Emaily!
      </h1>
    Collect Feedback form your users
    </div>
  );
};

export default Landing;
