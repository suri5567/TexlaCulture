import React from "react";
import BarChart from "../component/BarChart";
const Main1 = () => {
  return (
    <div className="main">
      <div className="performance">
        <p className="key">Key Performance Indicator</p>
        <div className="frame1">
          <div className="subframe">
            <div className="border"></div>
            <div className="percentage">
              <p className="client">Client Retention Rate</p>
              <p className="per">55%</p>
            </div>
          </div>

          <div className="subframe">
            <div className="border1"></div>
            <div className="percentage">
              <p className="client">Client Satisfaction</p>
              <p className="per1">55%</p>
            </div>
          </div>

          <div className="subframe">
            <div className="border2"></div>
            <div className="percentage">
              <p className="client">Revenue Generated</p>
              <p className="per2">55%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="c_status">
        <p className="key">Companies Status</p>
        <div className="c_states1">
          <div className="border_container">
            <div className="border3"></div>
            <div className="perc">
              <p className="total">Total</p>
              <p className="loper">20</p>
            </div>
          </div>

          <div className="border_container">
            <div className="border4"></div>
            <div className="perc">
              <p className="total">Active</p>
              <p className="loper">15</p>
            </div>
          </div>

          <div className="border_container">
            <div className="border5"></div>
            <div className="perc">
              <p className="total">New</p>
              <p className="loper">3</p>
            </div>
          </div>
        </div>
      </div>
      <BarChart />
    </div>
  );
};

export default Main1;
