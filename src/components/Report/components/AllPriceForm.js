import React from "react";
import { Input } from "antd";
import * as Style from "../../../styles/AllPriceForm";

const AllPriceForm = () => {
  return (
    <Style.AllPriceForm>
      <Style.FormSection>
        <Style.FormSectionHeaderWrap>
          <h2>Price</h2>
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
                  min="0"
                  step="0.1"
                  id="minimum-sale-price"
                  placeholder="0"
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
                  min="0"
                  step="0.1"
                  id="maximum-sale-price"
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
  );
};

export default AllPriceForm;
