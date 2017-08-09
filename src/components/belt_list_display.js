import React, { Component } from 'react';
import { Alert } from 'antd';

import Belts from './belts';
import BeltImage from './belt_image';

class BeltListDisplay extends Component {
  componentWillMount() {
    this.props.fetchBelts();
    this.props.fetchBeltImages();
  }

  render() {
    let currentBeltImage = this.props.beltImages[this.props.selectedBelt];
    return this.props.loggedIn &&
    this.props.belts.length !== 0 &&
    this.props.userDbInfo != null
      ? <div className="belt-display">
          <div className="belt-list">
            <Belts
              belts={this.props.belts}
              selectBelt={this.props.selectBelt}
              userDbInfo={this.props.userDbInfo}
            />
          </div>

          {this.props.selectedBelt
            ? <div className="belt-image">
                <BeltImage
                  currentBeltImage={currentBeltImage}
                  beltImages={this.props.beltImages}
                />
              </div>
            : 'Please select a belt'}
        </div>
      : <div className="landing-page">
          <Alert
            message="Login Required"
            description="Please register or login to see belt list."
            type="info"
            showIcon
          />
          <img
            src="https://s3.amazonaws.com/jj-app/lmjj-logo.png"
            alt="lmjj-logo"
            className="lmjj-logo"
          />
        </div>;
  }
}

export default BeltListDisplay;
