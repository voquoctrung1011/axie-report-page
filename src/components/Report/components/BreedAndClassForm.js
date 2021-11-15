import React, { useEffect, useState } from "react";
import { Input, Checkbox } from "antd";
import * as Style from "../../../styles/BreedAndClassForm";
import { useSelector, useDispatch } from "react-redux";
import { setCreateFilter } from "../../../reducer/store";

const iWidth = { width: "230px", minWidth: "unset" };

const BreedAndClassForm = () => {
  const dispatch = useDispatch();
  const { createFilter, listCheckbox } = useSelector((state) => state.store);
  const [axieClass, setAxie] = useState(listCheckbox);

  const handleChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    const part = [...axieClass];
    const index = part.indexOf(value);

    if (name === "axie_class") {
      if (checked && index === -1) {
        part.push(value);
      } else {
        part.splice(index, 1);
      }
      setAxie(part);
    }
    dispatch(
      setCreateFilter({
        ...createFilter,
        data: {
          ...createFilter.data,
          [name]: value,
        },
      })
    );
  };

  useEffect(() => {
    dispatch(
      setCreateFilter({
        ...createFilter,
        data: {
          ...createFilter.data,
          axie_class: axieClass,
        },
      })
    );
  }, [axieClass]);

  return (
    <Style.BreedAndClassForm>
      <Style.FormSection>
        <Style.FormSectionHeaderWrap>
          <Style.Title>Breed and Class</Style.Title>
        </Style.FormSectionHeaderWrap>
        <Style.FormSectionBodyWrap>
          <Style.MaximumBreedCount>
            <h2>
              <label htmlFor="maximum-breed-count">Maximum breed count</label>
            </h2>
            <div className="input-wrap">
              <Input
                type="number"
                id="maximum-breed-count"
                onChange={handleChangeValue}
                style={iWidth}
                placeholder="2"
                defaultValue="7"
                name="breedCount_threshold"
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
                    <Checkbox
                      defaultChecked="true"
                      name="axie_class"
                      onChange={handleChangeValue}
                      value={item.value}
                    >
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
