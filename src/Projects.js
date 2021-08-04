import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className="row projects ">
            <div className="col-12">
              <h2>Projects</h2>
              <div className="row prLong">
                <div className="row head"><div className="col-12 head"><h2>Yawnch</h2></div></div>
                <div className="row">
                  <div className="col-12">
                    <p>An online coworking community for indie hackers, entreprenuers, and founders. Chat live with app developers, designers, and mentors. Access video courses and tutorials.</p>
                  </div>
                </div>
                <div className="row"><div className="col-3"><button className="btn">Click</button></div></div>
              </div>
              <div className="row sh">
                <div className="col-5">
                  <div style={{borderLeft: '7px solid #81F59B'}} className="row prSh">
                    <div className="row head"><div className="col-12 head"><h2>Stockstream.tv</h2></div></div>
                    <div className="row">
                      <div className="col-12">
                        <p>On a mission to democratize investing knowledge. My partner and I bootstrapped this company with zero funding.</p>
                      </div>
                    </div>
                    <div className="row"><div className="col-3"><button className="btn">Click</button></div></div>
                  </div>
                </div>
                <div style={{marginRight: '15px'}} className="col-5">
                  <div style={{borderLeft: '7px solid #D9534D'}} className="row prSh">
                    <div className="row head"><div className="col-12 head"><h2>All Turtles</h2></div></div>
                    <div className="row">
                      <div className="col-12">
                        <p>I lead web development full time at All Turtles, an AI startup studio.</p>
                      </div>
                    </div>
                    <div className="row"><div className="col-3"><button className="btn">Click</button></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
