import React, {Component} from 'react';
import './panel.css';

// function Footer(props) {
//   const isTriFooter = props.isTriFooter;
//   if (isTriFooter) {
//     let footerTitle1 = this.footerTitle1;
//     let footerText1 = this.footerText1;
//     let footerTitle2 = this.footerTitle2;
//     let footerText2 = this.footerText2;
//     let footerTitle3 = this.footerTitle3;
//     let footerText3 = this.footerText3;
//     return (
//       <div className="card-footer text-white bg-dark">
//         <div className="row">
//           <div className="col">
//             <p className="card-title mb-0">{footerTitle1}</p>
//             <p className="card-text"><small className="text-muted">{footerText1}</small></p>
//           </div>
//           <div className="col">
//             <p className="card-title mb-0">{footerTitle2}</p>
//             <p className="card-text"><small className="text-muted">{footerText2}</small></p>
//           </div>
//           <div className="col">
//             <p className="card-title mb-0">{footerTitle3}</p>
//             <p className="card-text"><small className="text-muted">{footerText3}</small></p>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="card-footer bg-dark single"></div>
//   );
// }

class Footer extends Component {
  render() {
    //const isTriFooter = this.props.isTriFooter;
    if (this.props.isTriFooter) {
      // let footerTitle1 = this.footerTitle1;
      // let footerText1 = this.footerText1;
      // let footerTitle2 = this.footerTitle2;
      // let footerText2 = this.footerText2;
      // let footerTitle3 = this.footerTitle3;
      // let footerText3 = this.footerText3;
      return (
        <div className="card-footer text-white bg-dark">
          <div className="row">
            <div className="col">
              <p className="card-title mb-0">{this.props.footerTitle1}</p>
              <p className="card-text"><small className="text-muted">{this.props.footerText1}</small></p>
            </div>
            <div className="col">
              <p className="card-title mb-0">{this.props.footerTitle2}</p>
              <p className="card-text"><small className="text-muted">{this.props.footerText2}</small></p>
            </div>
            <div className="col">
              <p className="card-title mb-0">{this.props.footerTitle3}</p>
              <p className="card-text"><small className="text-muted">{this.props.footerText3}</small></p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="card-footer bg-dark single"></div>
    );
  }
}



class Panel extends Component {
  // constructor(props) {
  //   super(props);

  // }



  render() {

    // const isTriFooter = this.props.isTriFooter;
    // const footerTitle1 = this.props.footerTitle1;
    // const footerText1 = this.props.footerText1;
    // const footerTitle2 = this.props.footerTitle2;
    // const footerText2 = this.props.footerText2;
    // const footerTitle3 = this.props.footerTitle3;
    // const footerText3 = this.props.footerText3;


    return (
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
        </div>
        <Footer {...this.props}/>
      </div>
    );
  }
}

export default Panel;
