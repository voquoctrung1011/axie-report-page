/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Input } from "antd";
import * as Style from "../../../styles/AllCardStatsForm";

const iWidth = { width: "100px", minWidth: "unset" };

const AllCardStatsForm = () => {
  return (
    <Style.AllCardStatsForm>
      <Style.FormSection>
        <Style.FormSectionHeaderWrap>
          <Style.Title>Card Stats</Style.Title>
        </Style.FormSectionHeaderWrap>
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
                  style={iWidth}
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
                  style={iWidth}
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
