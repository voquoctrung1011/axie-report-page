import React, { useState } from "react";
import { Input, Checkbox } from "antd";
import * as Style from "../../../styles/BreedAndClassForm";
import { useSelector } from "react-redux";

const BreedAndClassForm = () => {
  const listCheckbox = useSelector((state) => state.store.listCheckbox);

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Style.BreedAndClassForm>
      <Style.FormSection>
        <Style.FormSectionHeaderWrap>
          <h2>Breed and Class</h2>
        </Style.FormSectionHeaderWrap>
        <Style.FormSectionBodyWrap>
          <Style.MaximumBreedCount>
            <h2>
              <label htmlFor="maximum-breed-count">Maximum breed count</label>
            </h2>
            <div className="input-wrap">
              <Input
                type="number"
                min="0"
                max="7"
                step="1"
                id="maximum-breed-count"
                placeholder="2"
                defaultValue="7"
                className=""
              />
            </div>
          </Style.MaximumBreedCount>
          <Style.AxieClassesForm>
            <h2>
              <label htmlFor="axie-class-select">Axie classes</label>
            </h2>
            <div className="input-wrap">
              <Style.Ul>
                {listCheckbox.map((item, index) => (
                  <Style.Li key={index}>
                    <Checkbox defaultChecked="true" onChange={onChange}>
                      {item.value}
                    </Checkbox>
                  </Style.Li>
                ))}
              </Style.Ul>
            </div>
          </Style.AxieClassesForm>
        </Style.FormSectionBodyWrap>
      </Style.FormSection>
    </Style.BreedAndClassForm>
  );
};

export default BreedAndClassForm;
