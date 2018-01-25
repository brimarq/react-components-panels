import React, {Component} from 'react';
import './main-content.css';
import Panel from '../panel/panel';

class MainContent extends Component {
  render() {
    return (
      <div className="col-sm-9 main-content">

        <div className="card-deck">

          <div className="card text-left">
            <div className="card-body">
              <p className="card-title">20</p>
              <p className="card-text"><small className="text-muted">New followers added this month</small></p>
            </div>
          </div>

          <div className="card text-left">
            <div className="card-body">
              <p className="card-title">$1250</p>
              <p className="card-text"><small className="text-muted">Average Monthly Income</small></p>
            </div>
          </div>

          <div className="card text-left">
            <div className="card-body">
              <p className="card-title">$13865</p>
              <p className="card-text"><small className="text-muted">Yearly Income Goal</small></p>
            </div>
          </div>

        </div> {/* .card-deck */}

        <div className="widecards">
          <div className="card text-center">
            <div className="card-body"></div>
            <div className="card-footer text-white bg-dark p-3">
              <div className="row">
                <div className="col">
                  <p className="card-title mb-0">15080</p>
                  <p className="card-text"><small className="text-muted">Shot Views</small></p>
                </div>
                <div className="col">
                  <p className="card-title mb-0">12000</p>
                  <p className="card-text"><small className="text-muted">Likes</small></p>
                </div>
                <div className="col">
                  <p className="card-title mb-0">5100</p>
                  <p className="card-text"><small className="text-muted">Comments</small></p>
                </div>
              </div>
            </div>
          </div>

          <div className="card text-center">
            <div className="card-body"></div>
            <div className="card-footer text-white bg-dark p-3">
              <div className="row">
                <div className="col">
                  <p className="card-title mb-0">15080</p>
                  <p className="card-text"><small className="text-muted">Shot Views</small></p>
                </div>
                <div className="col">
                  <p className="card-title mb-0">12000</p>
                  <p className="card-text"><small className="text-muted">Likes</small></p>
                </div>
                <div className="col">
                  <p className="card-title mb-0">5100</p>
                  <p className="card-text"><small className="text-muted">Comments</small></p>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
    );
  }
}

export default MainContent;
