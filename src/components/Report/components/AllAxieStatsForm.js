import React from "react";
import { Input } from "antd";

const AllAxieStatsForm = () => {
  return (
    <div className="AllAxieStatsForm">
      <div className="FormSection">
        <div className="FormSection-header-wrap">
          <h2>Axie Stats</h2>
        </div>
        <div className="FormSection-body-wrap">
          <div className="container">
            <div className="MinimumHp">
              <h2>
                <label htmlFor="minimum-hp">Minimum HP</label>
              </h2>
              <div className="input-wrap">
                <Input
                  type="number"
                  min="21"
                  step="1"
                  max="61"
                  placeholder="21"
                  id="minimum-hp"
                  defaultValue="21"
                />
                <span>HP</span>
              </div>
            </div>
            <div className="MinimumSpeed">
              <h2>
                <label htmlFor="minimum-speed">Minimum Speed</label>
              </h2>
              <div className="input-wrap">
                <Input
                  type="number"
                  min="21"
                  step="1"
                  max="61"
                  placeholder="21"
                  id="minimum-speed"
                  defaultValue="21"
                />
              </div>
            </div>
            <div className="MinimumSkill">
              <h2>
                <label htmlFor="minimum-skill">Minimum Skill</label>
              </h2>
              <div className="input-wrap">
                <Input
                  type="number"
                  min="21"
                  step="1"
                  max="61"
                  placeholder="21"
                  id="minimum-skill"
                  defaultValue="21"
                />
              </div>
            </div>
            <div className="MinimumMorale">
              <h2>
                <label htmlFor="minimum-morale">Minimum Morale</label>
              </h2>
              <div className="input-wrap">
                <Input
                  type="number"
                  min="21"
                  step="1"
                  max="61"
                  placeholder="21"
                  id="minimum-morale"
                  defaultValue="21"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAxieStatsForm;
