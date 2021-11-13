/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { Button, Pagination } from "antd";
import * as Style from "../../../styles/FormSection";
import { useSelector, useDispatch } from "react-redux";
import { setShowAll } from "../../../reducer/store";

const SearchResult = ({ type }) => {
  const dispatch = useDispatch();
  const showAll = useSelector((state) => state.store.showAll);
  const [data, setData] = useState([
    { name: "Gero", attribute: "aquatic", eyes: "eyes-gero", country: "" },
    {
      name: "Sleepless",
      attribute: "aquatic",
      eyes: "eyes-sleepless",
      country: "",
    },
    { name: "Yen", attribute: "aquatic", eyes: "eyes-yen", country: "japan" },
    { name: "Clear", attribute: "aquatic", eyes: "eyes-clear", country: "" },
    {
      name: "Telescope",
      attribute: "aquatic",
      eyes: "eyes-telescope",
      country: "",
    },
  ]);

  const onToogleCloseShow = () => {
    const newShowAll = [...showAll];
    const aIndex = newShowAll?.indexOf(type);
    if (aIndex !== -1) {
      newShowAll.splice(aIndex, 1);
    }
    dispatch(setShowAll(newShowAll));
  };

  return (
    <div className="search-results-container">
      <div className="search-results-wrap">
        <Style.GeneSearchResults>
          {data.map((o, index) => (
            <Style.GeneSearchResult key={index}>
              <Style.container>
                <h2>
                  <span>{o.name}</span>
                </h2>
                <Style.axieClass>{o.attribute}</Style.axieClass>
                <Style.axiePartId>{o.eyes}</Style.axiePartId>
                <Style.axieSpecialGene>{o.country}</Style.axieSpecialGene>
              </Style.container>
            </Style.GeneSearchResult>
          ))}
        </Style.GeneSearchResults>
        <Style.GeneSearchResultsOptions>
          <div className="paginated-results-wrap">
            <div className="clear-results-cta">
              <Button
                type="button"
                className="Button Button-anchor"
                onClick={onToogleCloseShow}
              >
                Clear results
              </Button>
            </div>
            {/* Pagination of antd */}
            {/* <Pagination
              total={85}
              showTotal={(total, range) =>
                `Showing${range[0]}-${range[1]} of ${total}`
              }
              defaultPageSize={20}
              defaultCurrent={1}
            /> */}
            {/* Pagination custom */}
            <Style.pagination>
              <Style.resultsDescription className="results-description">
                Showing 1 - 5 of 255
              </Style.resultsDescription>
              <Style.paginationOptions>
                <div className="first-page">
                  <Style.svgPagination viewBox="0 0 24 24" fill="none">
                    <path d="M11 17L6 12L11 7" stroke="#3082F2"></path>
                    <path d="M18 17L13 12L18 7" stroke="#3082F2"></path>
                  </Style.svgPagination>
                </div>
                <div className="back-page">
                  <Style.svgPagination viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#3082F2"></path>
                  </Style.svgPagination>
                </div>
                <div className="next-page">
                  <Style.svgPagination viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="#3082F2"></path>
                  </Style.svgPagination>
                </div>
                <div className="last-page">
                  <Style.svgPagination viewBox="0 0 24 24" fill="none">
                    <path d="M13 17L18 12L13 7" stroke="#3082F2"></path>
                    <path d="M6 17L11 12L6 7" stroke="#3082F2"></path>
                  </Style.svgPagination>
                </div>
              </Style.paginationOptions>
            </Style.pagination>
          </div>
        </Style.GeneSearchResultsOptions>
      </div>
    </div>
  );
};
export default SearchResult;
