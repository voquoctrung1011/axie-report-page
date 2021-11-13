import React from "react";
import { Input } from "antd";
import * as Style from "../../../styles/AllAxieStatsForm";

const AllAxieStatsForm = () => {
  return (
    <Style.AllAxieStatsForm>
      <Style.FormSection>
        <Style.FormSectionHeaderWrap>
          <h2>Axie Stats</h2>
        </Style.FormSectionHeaderWrap>
        <Style.FormSectionBodyWrap>
          <Style.container>
            <Style.MinimumHp>
              <h2>
                <label htmlFor="minimum-hp">Minimum HP</label>
              </h2>
              <Style.inputWrap>
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
              </Style.inputWrap>
            </Style.MinimumHp>
            <Style.MinimumSpeed>
              <h2>
                <label htmlFor="minimum-speed">Minimum Speed</label>
              </h2>
              <Style.inputWrap>
                <Input
                  type="number"
                  min="21"
                  step="1"
                  max="61"
                  placeholder="21"
                  id="minimum-speed"
                  defaultValue="21"
                />
              </Style.inputWrap>
            </Style.MinimumSpeed>
            <Style.MinimumSkill>
              <h2>
                <label htmlFor="minimum-skill">Minimum Skill</label>
              </h2>
              <Style.inputWrap>
                <Input
                  type="number"
                  min="21"
                  step="1"
                  max="61"
                  placeholder="21"
                  id="minimum-skill"
                  defaultValue="21"
                />
              </Style.inputWrap>
            </Style.MinimumSkill>
            <Style.MinimumMorale>
              <h2>
                <label htmlFor="minimum-morale">Minimum Morale</label>
              </h2>
              <Style.inputWrap>
                <Input
                  type="number"
                  min="21"
                  step="1"
                  max="61"
                  placeholder="21"
                  id="minimum-morale"
                  defaultValue="21"
                />
              </Style.inputWrap>
            </Style.MinimumMorale>
          </Style.container>
        </Style.FormSectionBodyWrap>
      </Style.FormSection>
    </Style.AllAxieStatsForm>
  );
};

export default AllAxieStatsForm;
