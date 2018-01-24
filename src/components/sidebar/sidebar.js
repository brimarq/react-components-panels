import React, {Component} from 'react';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-sm-3 sidebar">
        <div className="card text-white bg-warning">
          <div className="card-body">
            <h5 className="card-title">18°</h5>
            <p className="card-text"><small>Paris</small></p>
          </div>
        </div>

        <div className="card text-white text-left">
          <div className="card-header bg-warning">
            <p className="card-text"><small>New visitors</small></p>
            <h5 className="card-title">1.5k</h5>
          </div>
          <div className="card-body">
            <p></p>
          </div>
        </div>

        <div className="card text-white text-left bg-warning">
          <div className="card-header ">
            <p className="card-text"><small>New visitors</small></p>
            <h5 className="card-title">1.5k</h5>
          </div>
          <div className="card-body">
            <p className="card-text"><small>New visitors</small></p>
            <h5 className="card-title">1.5k</h5>
          </div>
          <div className="card-footer text-white bg-light">
            <p className="card-text">15080</p>
            <p className="card-text"><small className="text-muted">Shot Views</small></p>
          </div>
        </div>

      </div>
    );
  }
}

export default Sidebar;
