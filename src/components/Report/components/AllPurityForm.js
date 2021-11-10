import React from "react";

const AllPurityForm = () => {
  return (
    <div className="AllPurityForm">
      <div className="FormSection">
        <div className="FormSection-header-wrap">
          <h2>Purity</h2>
        </div>
        <div className="FormSection-body-wrap">
          <div className="container">
            <div className="MinPurenessForm">
              <h2>
                <label htmlFor="minimum-pureness">Minimum pureness</label>
              </h2>
              <div className="input-wrap">
                <input
                  type="number"
                  min="0"
                  step="1"
                  max="6"
                  id="minimum-pureness"
                  placeholder="1"
                  defaultValue="0"
                />
              </div>
            </div>
            <div className="MinPurityForm">
              <h2>
                <label htmlFor="minimum-purity">Minimum purity</label>
              </h2>
              <div className="input-wrap">
                <input
                  type="number"
                  min="0"
                  step="5"
                  max="100"
                  id="minimum-purity"
                  placeholder="50"
                  defaultValue="0"
                />
                <span>%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPurityForm;
