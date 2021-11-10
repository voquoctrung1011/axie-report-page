import React from "react";
import { Input } from "antd";

const AllPriceForm = () => {
  return (
    <div className="AllPriceForm">
      <div className="FormSection">
        <div className="FormSection-header-wrap">
          <h2>Price</h2>
        </div>
        <div className="FormSection-body-wrap">
          <div className="container">
            <div className="MinimumSalePrice">
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
            </div>
            <div className="MaximumSalePrice">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPriceForm;
