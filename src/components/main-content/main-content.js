import React, {Component} from 'react';
import './main-content.css';

class MainContent extends Component {
  render() {
    return (
      <div className="col-sm-9 main-content">

        <div className="card-deck">

          <div className="card text-left border-dark">
            <div className="card-body">
              <h5 className="card-title">20</h5>
              <p className="card-text"><small className="text-muted">New followers added this month</small></p>
            </div>
          </div>

          <div className="card text-left border-dark">
            <div className="card-body">
              <h5 className="card-title">$ 1250</h5>
              <p className="card-text"><small className="text-muted">Average Monthly Income</small></p>
            </div>
          </div>

          <div className="card text-left border-dark">
            <div className="card-body">
              <h5 className="card-title">$ 13865</h5>
              <p className="card-text"><small className="text-muted">Yearly Income Goal</small></p>
            </div>
          </div>

        </div> {/* .card-deck */}

        <div className="card text-center bg-primary border-dark">
          <div className="card-body">
            <p></p>
          </div>
          <div className="card-footer text-white bg-dark">
            <div className="row">
              <div className="col">
                <p className="card-text">15080</p>
                <p className="card-text"><small className="text-muted">Shot Views</small></p>
              </div>
              <div className="col">
                <p className="card-text">12000</p>
                <p className="card-text"><small className="text-muted">Likes</small></p>
              </div>
              <div className="col">
                <p className="card-text">5100</p>
                <p className="card-text"><small className="text-muted">Comments</small></p>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default MainContent;
