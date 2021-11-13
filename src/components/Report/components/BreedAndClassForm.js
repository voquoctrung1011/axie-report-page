import React, { useState } from "react";
import { Input, Checkbox } from "antd";
import * as Style from "../../../styles/BreedAndClassForm";

const BreedAndClassForm = () => {
  const [listCheckbox, setList] = useState([
    { id: 1, value: "Beast" },
    { id: 2, value: "Bug" },
    { id: 3, value: "Bird" },
    { id: 4, value: "Plant" },
    { id: 5, value: "Aquatic" },
    { id: 6, value: "Reptile" },
    { id: 7, value: "Dusk" },
    { id: 8, value: "Dawn" },
    { id: 9, value: "Metch" },
  ]);

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
