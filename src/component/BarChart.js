import React from "react";

const BarChart = () => {
  return (
    <div className="performance1">
      <p className="key">Avtice User Base</p>
      <div className="all">
        <div className="last">
          <div className="block">
            <p className="perUser">
              <span className="circle1"></span>89% App User
            </p>
            <div className="bar"></div>
          </div>
          <div>
            <p className="perUser">
              <span className="circle2"></span>11% Web User
            </p>
            <div className="bar2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
