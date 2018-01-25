import React, {Component} from 'react';
import './panel.css';

function Footer(props) {
  const isTriFooter = props.isTriFooter;
  if (isTriFooter) {
    let footerTitle1 = props.footerTitle1;
    let footerText1 = props.footerText1;
    let footerTitle2 = props.footerTitle2;
    let footerText2 = props.footerText2;
    let footerTitle3 = props.footerTitle3;
    let footerText3 = props.footerText3;
    return (
      <div className="card-footer text-white bg-dark">
        <div className="row">
          <div className="col">
            <p className="card-title mb-0">{footerTitle1}</p>
            <p className="card-text"><small className="text-muted">{footerText1}</small></p>
          </div>
          <div className="col">
            <p className="card-title mb-0">{footerTitle2}</p>
            <p className="card-text"><small className="text-muted">{footerText2}</small></p>
          </div>
          <div className="col">
            <p className="card-title mb-0">{footerTitle3}</p>
            <p className="card-text"><small className="text-muted">{footerText3}</small></p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="card-footer bg-dark"></div>
  );
}



class Panel extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
        </div>
        <Footer isTriFooter={true} footerTitle1={"15080"} footerText1={"Shot Views"} footerTitle2={"12000"} footerText2={"Likes"} footerTitle3={"5100"} footerText3={"Comments"}/>
      </div>
    );
  }
}

export default Panel;
