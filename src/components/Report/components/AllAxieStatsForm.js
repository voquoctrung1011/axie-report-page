import React from "react";
import { Input } from "antd";
import * as Style from "../../../styles/AllAxieStatsForm";
import { useSelector, useDispatch } from "react-redux";
import { setCreateFilter } from "../../../reducer/store";

const iWidth = { width: "130px", minWidth: "unset" };

const AllAxieStatsForm = () => {
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
    <Style.AllAxieStatsForm>
      <Style.FormSection>
        <Style.FormSectionHeaderWrap>
          <Style.Title>Axie Stats</Style.Title>
        </Style.FormSectionHeaderWrap>
        <Style.FormSectionBodyWrap>
          <Style.container>
            <Style.MinimumHp>
              <h2>
                <label htmlFor="minimum-hp">Minimum HP</label>
              </h2>
              <div className="input-wrap">
                <Input
                  type="number"
                  placeholder="21"
                  name="hp_threshold"
                  style={iWidth}
                  onChange={handleChangeValue}
                  id="minimum-hp"
                  defaultValue="21"
                />
                <span>HP</span>
              </div>
            </Style.MinimumHp>
            <Style.MinimumSpeed>
              <h2>
                <label htmlFor="minimum-speed">Minimum Speed</label>
              </h2>
              <div className="input-wrap">
                <Input
                  type="number"
                  name="speed_threshold"
                  style={iWidth}
                  onChange={handleChangeValue}
                  placeholder="21"
                  id="minimum-speed"
                  defaultValue="21"
                />
              </div>
            </Style.MinimumSpeed>
            <Style.MinimumSkill>
              <h2>
                <label htmlFor="minimum-skill">Minimum Skill</label>
              </h2>
              <div className="input-wrap">
                <Input
                  type="number"
                  name="skill_threshold"
                  onChange={handleChangeValue}
                  style={iWidth}
                  placeholder="21"
                  id="minimum-skill"
                  defaultValue="21"
                />
              </div>
            </Style.MinimumSkill>
            <Style.MinimumMorale>
              <h2>
                <label htmlFor="minimum-morale">Minimum Morale</label>
              </h2>
              <div className="input-wrap">
                <Input
                  type="number"
                  style={iWidth}
                  onChange={handleChangeValue}
                  name="morale_threshold"
                  placeholder="21"
                  id="minimum-morale"
                  defaultValue="21"
                />
              </div>
            </Style.MinimumMorale>
          </Style.container>
        </Style.FormSectionBodyWrap>
      </Style.FormSection>
    </Style.AllAxieStatsForm>
  );
};

export default AllAxieStatsForm;
