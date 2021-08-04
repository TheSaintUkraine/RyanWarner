import React, { Component } from 'react'
import Heart from "./img/Heart.png";
export default class Header extends Component {
    render() {
        return (
            <div className="row header">
      <div className="col-4 logo"><img src={Heart} /><h1>Ryan Warner</h1></div>
      <div className="col-3 nav">
        <a href="#">Home</a>
        <a href="#">Articles</a>
        <a href="#">About</a>
      </div>
    </div>
        )
    }
}
