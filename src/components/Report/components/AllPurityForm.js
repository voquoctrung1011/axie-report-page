import React from "react";
import * as Style from "../../../styles/AllPurityForm";

const iWidth = { width: "120px", minWidth: "unset" };

const AllPurityForm = () => {
  return (
    <Style.AllPurityForm>
      <Style.FormSection>
        <Style.FormSectionHeaderWrap>
          <Style.Title>Purity</Style.Title>
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
                  style={iWidth}
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
                  style={iWidth}
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
