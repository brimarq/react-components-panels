import React, {Component} from 'react';
import './sidebar.css';
import Panel from '../panel/panel';

class Sidebar extends Component {
  render() {
    return (

      <div className="col-sm-3 sidebar">

        <div className="weather">
          <Panel bodyTitle={"18°"} bodyText={"Paris"} />
        </div>

        <div className="stats">
          {/*<Panel bodyTitle={"New Visitors"} bodyText={"1.5k"} hasFooter={true}/>
          <Panel bodyTitle={"Bounce Rate"} bodyText={"50%"} hasFooter={true}/>
          <Panel bodyTitle={"Searches"} bodyText={"28%"} hasFooter={true}/>
          <Panel bodyTitle={"Traffic"} bodyText={"140.5 kb"} hasFooter={true}/>*/}

          <Panel hasHeader={true} headerTitle={"New Visitors"} headerText={"1.5k"}/>
          <Panel hasHeader={true} headerTitle={"Bounce Rate"} headerText={"50%"}/>
          <Panel hasHeader={true} headerTitle={"Searches"} headerText={"28%"}/>
          <Panel hasHeader={true} headerTitle={"Traffic"} headerText={"140.5 kb"}/>
        </div>

      </div>
    );
  }
}

export default Sidebar;
