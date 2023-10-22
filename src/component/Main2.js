import React from "react";
import BasicSelect from "../component/BasicSelect";
import Companies from "./Companies";
import Metrices from "./Metrices";
import { ReactComponent as Search } from "../icons/search.svg";
const Main2 = () => {
  return (
    <div className="main2">
      <div className="main2_p1">
        <p>Onboarded Companies</p>
        <div className="inputs">
          <BasicSelect />
          <p>
            <Search />
          </p>
          <input
            className="in"
            type="text"
            placeholder="Search client invoice number"
          />
        </div>
        <Companies />
      </div>
      <div className="mian2_p2">
        <Metrices />
      </div>
    </div>
  );
};

export default Main2;
