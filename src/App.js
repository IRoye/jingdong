import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import FastMenu from './component/FastMenu';
import mainStyle from './style/main.scss';

export class App extends Component {

  componentDidMount(){
   


  }

  render() {
    return (
      <div>
          <FastMenu />
      </div>
    );
  }
}