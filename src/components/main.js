import React, { Component } from 'react';
import Navigation from './navigation.js';

const Main = (props) => {
  return(
    <div>
      <Navigation />
      <div className='row'>
        <div className="columns medium-8 large-6 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );

};

export default Main;
