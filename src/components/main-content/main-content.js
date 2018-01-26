import React, {Component} from 'react';
import './main-content.css';
import Panel from '../panel/panel';

class MainContent extends Component {
  render() {
    return (
      <div className="col-sm-9 main-content">

        <div className="card-deck">
          <Panel bodyTitle={"20"} bodyText={"New followers added this month"}/>
          <Panel bodyTitle={"$1250"} bodyText={"Average Monthly Income"}/>
          <Panel bodyTitle={"$13865"} bodyText={"Yearly Income Goal"}/>
        </div> {/* .card-deck */}

        <div className="widecards">
          <Panel hasFooter={true} isTriFooter={true} triFooterTitle1={"15080"} triFooterText1={"Shot Views"} triFooterTitle2={"12000"} triFooterText2={"Likes"} triFooterTitle3={"5100"} triFooterText3={"Comments"}/>
          <Panel hasFooter={true} isTriFooter={true} triFooterTitle1={"15080"} triFooterText1={"Shot Views"} triFooterTitle2={"12000"} triFooterText2={"Likes"} triFooterTitle3={"5100"} triFooterText3={"Comments"}/>
        </div> {/* .widecards */}

      </div>
    );
  }
}

export default MainContent;
