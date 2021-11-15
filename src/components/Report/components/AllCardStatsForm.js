/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Input } from "antd";
import * as Style from "../../../styles/AllCardStatsForm";
import { useSelector, useDispatch } from "react-redux";
import { setCreateFilter } from "../../../reducer/store";
const iWidth = { width: "100px", minWidth: "unset" };

const AllCardStatsForm = () => {
  const dispatch = useDispatch();
  const { createFilter } = useSelector((state) => state.store);

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
                  name="attack_threshold"
                  style={iWidth}
                  onChange={handleChangeValue}
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
                  name="defense_threshold"
                  onChange={handleChangeValue}
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
