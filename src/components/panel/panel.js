import React, {Component} from 'react';
import './panel.css';

class Header extends Component {
  render() {
    if (this.props.hasHeader) {
      return (
        <div className="card-header">
          <p className="card-title">{this.props.headerTitle}</p>
          <p className="card-text">{this.props.headerText}</p>
        </div>
      );
    }
    return null;
  }
}

class Body extends Component {
  render() {
    return (
      <div className="card-body">
        <p className="card-title">{this.props.bodyTitle}</p>
        <p className="card-text">{this.props.bodyText}</p>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    if (this.props.hasFooter) {
      if (this.props.isTriFooter) {
        return (
          <div className="card-footer bg-dark">
            <div className="row">
              <div className="col">
                <p className="card-title">{this.props.triFooterTitle1}</p>
                <p className="card-text">{this.props.triFooterText1}</p>
              </div>
              <div className="col">
                <p className="card-title">{this.props.triFooterTitle2}</p>
                <p className="card-text">{this.props.triFooterText2}</p>
              </div>
              <div className="col">
                <p className="card-title">{this.props.triFooterTitle3}</p>
                <p className="card-text">{this.props.triFooterText3}</p>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="card-footer"></div>
      );
    }

    return null;
  }
}



class Panel extends Component {
  render() {
    return (
      <div className="card">
        <Header {...this.props}/>
        <Body {...this.props}/>
        <Footer {...this.props}/>
      </div>
    );
  }
}

export default Panel;
