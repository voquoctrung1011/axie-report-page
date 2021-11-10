import React, { useState } from "react";
import { Input, Checkbox } from "antd";

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
    <div className="BreedAndClassForm">
      <div className="FormSection">
        <div className="FormSection-header-wrap">
          <h2>Breed and Class</h2>
        </div>
        <div className="FormSection-body-wrap">
          <div className="MaximumBreedCount">
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
          </div>
          <div className="AxieClassesForm">
            <h2>
              <label htmlFor="axie-class-select">Axie classes</label>
            </h2>
            <div className="input-wrap">
              <ul>
                {listCheckbox.map((item, index) => (
                  <li key={index}>
                    <Checkbox defaultChecked="true" onChange={onChange}>
                      {item.value}
                    </Checkbox>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedAndClassForm;
