import React, {Component} from 'react';
import './sidebar.css';
import Panel from '../panel/panel';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-sm-3 sidebar">
        <div className="card weather">
          <div className="card-body">
            <h5 className="card-title">18°</h5>
            <p className="card-text"><small>Paris</small></p>
          </div>
        </div>

        <div className="card stats new-visitors">
          <div className="card-body">
            <p className="card-title"><small>New visitors</small></p>
            <p className="card-text">1.5k</p>
          </div>
          <div className="card-footer bg-light"></div>
        </div>

        <div className="card stats bounce-rate">
          <div className="card-body">
            <p className="card-title"><small>Bounce Rate</small></p>
            <p className="card-text">50%</p>
          </div>
          <div className="card-footer bg-light"></div>
        </div>

        <div className="card stats searches">
          <div className="card-body">
            <p className="card-title"><small>Searches</small></p>
            <p className="card-text">28%</p>
          </div>
          <div className="card-footer bg-light"></div>
        </div>

        <div className="card stats traffic">
          <div className="card-body">
            <p className="card-title"><small>Traffic</small></p>
            <p className="card-text">140.5 kb</p>
          </div>
          <div className="card-footer bg-light"></div>
        </div>

      </div>
    );
  }
}

export default Sidebar;
