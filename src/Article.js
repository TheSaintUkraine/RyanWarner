import React, { Component } from 'react'
import js from "./img/js.png";
import ReactLogo from "./img/React.png";
export default class Article extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        if(this.props.type === "js") {
            return (
                <div className="row article">
              <div className="row a">
                <div className="col-auto aInfo"><img src={js} alt=""  /><p>{this.props.title}</p></div>
              </div>
              <div className="row date"><div className="col-12">{this.props.date}</div></div>
            </div>
            )
        }
        else if(this.props.type === "react") {
            return (
                <div className="row article">
              <div className="row a">
                <div className="col-auto aInfo"><img src={ReactLogo} alt=""  /><p>{this.props.title}</p></div>
              </div>
              <div className="row date"><div className="col-12">{this.props.date}</div></div>
            </div>
            )
        }
    }
}
