import React from "react";
import { Input } from "antd";
import * as Style from "../../../styles/AllPriceForm";

const iWidth = { width: "180px", minWidth: "unset" };

const AllPriceForm = () => {
  return (
    <>
      <div className="input-wrap">
        <Input
          placeholder="Enter name ..."
          style={{ width: "100%", margin: "40px 0" }}
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
                    style={iWidth}
                    defaultValue="0"
                    className=""
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
