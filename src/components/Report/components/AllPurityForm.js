import React from "react";
import * as Style from "../../../styles/AllPurityForm";

const AllPurityForm = () => {
  return (
    <Style.AllPurityForm>
      <Style.FormSection>
        <Style.FormSectionHeaderWrap>
          <h2>Purity</h2>
        </Style.FormSectionHeaderWrap>
        <Style.FormSectionBodyWrap>
          <Style.container>
            <Style.MinPurenessForm>
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
            </Style.MinPurenessForm>
            <Style.MinPurityForm>
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
            </Style.MinPurityForm>
          </Style.container>
        </Style.FormSectionBodyWrap>
      </Style.FormSection>
    </Style.AllPurityForm>
  );
};

export default AllPurityForm;
