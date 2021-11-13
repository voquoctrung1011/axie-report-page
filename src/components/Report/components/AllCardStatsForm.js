import React from "react";
import { Input } from "antd";
import * as Style from "../../../styles/AllCardStatsForm";

const AllCardStatsForm = () => {
  return (
    <Style.AllCardStatsForm>
      <Style.FormSection>
        <div className="FormSection-header-wrap">
          <h2>Card Stats</h2>
        </div>
        <Style.FormSectionBodyWrap>
          <Style.container>
            <Style.MinimumAttack>
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
            </Style.MinimumAttack>
            <Style.MinimumDefence className="MinimumDefence">
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
            </Style.MinimumDefence>
          </Style.container>
        </Style.FormSectionBodyWrap>
      </Style.FormSection>
    </Style.AllCardStatsForm>
  );
};

export default AllCardStatsForm;
