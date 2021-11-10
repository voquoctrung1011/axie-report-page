import React, { useEffect, useState } from "react";
import { Button, Pagination } from "antd";

const SearchResult = ({ showAll, setShowAll, type }) => {
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
    setShowAll(newShowAll);
  };

  return (
    <div className="search-results-container">
      <div className="search-results-wrap">
        <div className="GeneSearchResults">
          {data.map((o, index) => (
            <div className="GeneSearchResult" key={index}>
              <div className="container">
                <h2>
                  <span>{o.name}</span>
                </h2>
                <p className="axie-className axie-className-aquatic">
                  {o.attribute}
                </p>
                <p className="axie-part-id">{o.eyes}</p>
                <p className="axie-special-gene">{o.country}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="GeneSearchResultsOptions">
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
            <div className="pagination">
              <div className="results-description">Showing 1 - 5 of 255</div>
              <div className="pagination-options">
                <div className="first-page">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M11 17L6 12L11 7" stroke="#3082F2"></path>
                    <path d="M18 17L13 12L18 7" stroke="#3082F2"></path>
                  </svg>
                </div>
                <div className="back-page">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#3082F2"></path>
                  </svg>
                </div>
                <div className="next-page">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="#3082F2"></path>
                  </svg>
                </div>
                <div className="last-page">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M13 17L18 12L13 7" stroke="#3082F2"></path>
                    <path d="M6 17L11 12L6 7" stroke="#3082F2"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchResult;
