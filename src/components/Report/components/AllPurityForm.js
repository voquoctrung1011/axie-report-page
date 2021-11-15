import React from "react";
import * as Style from "../../../styles/AllPurityForm";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setCreateFilter } from "../../../reducer/store";
const iWidth = { width: "120px", minWidth: "unset" };

const AllPurityForm = () => {
  const dispatch = useDispatch();
  const { createFilter, listChoose } = useSelector((state) => state.store);

  const handleChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
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
                <Input
                  type="number"
                  style={iWidth}
                  name="pureness_threshold"
                  onChange={handleChangeValue}
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
                <Input
                  type="number"
                  style={iWidth}
                  name="quality_threshold"
                  onChange={handleChangeValue}
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
