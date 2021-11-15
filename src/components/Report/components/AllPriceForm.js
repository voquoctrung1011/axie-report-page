import React from "react";
import { Input } from "antd";
import * as Style from "../../../styles/AllPriceForm";
import { useSelector, useDispatch } from "react-redux";
import { setCreateFilter } from "../../../reducer/store";
const iWidth = { width: "180px", minWidth: "unset" };

const AllPriceForm = () => {
  const dispatch = useDispatch();
  const { createFilter } = useSelector((state) => state.store);

  const handleChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "filterName") {
      dispatch(
        setCreateFilter({
          ...createFilter,
          [name]: value,
        })
      );
    } else {
      dispatch(
        setCreateFilter({
          ...createFilter,
          data: {
            ...createFilter.data,
            [name]: value,
          },
        })
      );
    }
  };
  return (
    <>
      <Style.FormSectionHeaderWrap>
        <Style.Title>Filter Name</Style.Title>
      </Style.FormSectionHeaderWrap>
      <div className="input-wrap">
        <Input
          placeholder="Enter name ..."
          style={{ width: "100%", marginBottom: "30px" }}
          name="filterName"
          onChange={handleChangeValue}
          id="minimum-hp"
        />
      </div>
      <Style.AllPriceForm>
        <Style.FormSection>
          <Style.FormSectionHeaderWrap>
            <Style.Title>Price</Style.Title>
          </Style.FormSectionHeaderWrap>
          <Style.FormSectionBodyWrap>
            <Style.container>
              <Style.MinimumSalePrice>
                <h2>
                  <label htmlFor="minimum-sale-price">Minimum sale price</label>
                </h2>
                <div className="input-wrap">
                  <Input
                    type="number"
                    id="minimum-sale-price"
                    placeholder="0"
                    onChange={handleChangeValue}
                    style={iWidth}
                    name="min_price"
                    defaultValue="0"
                  />
                  <span>ETH</span>
                </div>
              </Style.MinimumSalePrice>
              <Style.MaximumSalePrice>
                <h2>
                  <label htmlFor="maximum-sale-price">Maximum sale price</label>
                </h2>
                <div className="input-wrap">
                  <Input
                    type="number"
                    id="maximum-sale-price"
                    style={iWidth}
                    placeholder="0.02"
                    onChange={handleChangeValue}
                    name="max_price"
                    defaultValue=""
                    className=""
                  />
                  <span>ETH</span>
                </div>
              </Style.MaximumSalePrice>
            </Style.container>
          </Style.FormSectionBodyWrap>
        </Style.FormSection>
      </Style.AllPriceForm>
    </>
  );
};

export default AllPriceForm;
