import React, { Component } from 'react'
import Twitter from "./img/Twitter.png";
import GitHub from "./img/GitHub.png";
import Dribbble from "./img/Dribbble.png";
export default class Footer extends Component {
    render() {
        return (
            <div className="container ">
    <div className="row footer">
      <div className="col-4"><p>Designed and developed by Ryan Warner.
          Built with Gatsby. Hosted on Firebase. Type set in Jost*.</p>
      </div>
      <div className="col-2 contact_social">
        <a href="#"><img src={Twitter}  /></a>
        <a href="#"><img src={GitHub}  /></a>
        <a href="#"><img src={Dribbble}  /></a>
      </div>
    </div>
  </div>
        )
    }
}
