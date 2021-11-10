import React from "react";
import { Input } from "antd";

const AllCardStatsForm = () => {
  return (
    <div className="AllCardStatsForm">
      <div className="FormSection">
        <div className="FormSection-header-wrap">
          <h2>Card Stats</h2>
        </div>
        <div className="FormSection-body-wrap">
          <div className="container">
            <div className="MinimumAttack">
              <h2>
                <label htmlFor="minimum-attack">
                  Minimum Attack (sum of cards)
                </label>
              </h2>
              <div className="input-wrap">
                <Input
                  type="number"
                  min="0"
                  step="5"
                  placeholder="0"
                  id="minimum-attack"
                  defaultValue="0"
                />
              </div>
            </div>
            <div className="MinimumDefence">
              <h2>
                <label htmlFor="minimum-defence">
                  Minimum Defense (sum of cards)
                </label>
              </h2>
              <div className="input-wrap">
                <Input
                  type="number"
                  min="0"
                  step="5"
                  placeholder="0"
                  id="minimum-defence"
                  defaultValue="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCardStatsForm;
