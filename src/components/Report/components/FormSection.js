/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import SearchTrait from "./SearchTrait";
import SearchResult from "./SearchResults";
import { Button } from "antd";

const FormSection = () => {
  const [showAll, setShowAll] = useState([]);
  const [gene_1, setGene_1] = useState(false);
  const [gene_2, setGene_2] = useState(false);

  const ShowGene = (type) => {
    switch (type) {
      case "r1":
        return setGene_1(true);
      case "r2":
        return setGene_2(true);
    }
  };

  const onToogleShowAll = (type) => {
    const newShowAll = [...showAll];
    const aIndex = newShowAll.indexOf(type);
    if (aIndex === -1) {
      setShowAll([...showAll, type]);
    }
  };

  return (
    <div className="FormSection">
      <div className="FormSection-header-wrap">
        <h2>Genes</h2>
      </div>
      <div className="FormSection-body-wrap">
        <div className="AllGenesInput">
          <h2>Dominant genes</h2>
          <p>
            Search and select dominant genes to require (
            <svg viewBox="0 0 10 10" width="10" height="10">
              <rect x="0" y="0" width="10" height="10" fill="green"></rect>
            </svg>
            ) or exclude (
            <svg viewBox="0 0 10 10" width="10" height="10">
              <rect x="0" y="0" width="10" height="10" fill="red"></rect>
            </svg>
            ). Click to toggle between include / exclude.
          </p>
          <div className="GeneSelectInput">
            <div className="search-input-container">
              <div className="GeneSelectSearchInput">
                <SearchTrait />
              </div>
            </div>
            <div className="search-results-container">
              <div className="search-results-wrap">
                <div className="GeneSearchResults"></div>
                <div className="GeneSearchResultsOptions">
                  <div className="non-pagination-actions-wrap">
                    {!showAll.includes("all") ? (
                      <Button
                        type="button"
                        className="Button Button-anchor"
                        onClick={() => onToogleShowAll("all")}
                      >
                        Show all
                      </Button>
                    ) : (
                      <SearchResult
                        showAll={showAll}
                        setShowAll={setShowAll}
                        type="all"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="other-filters-desc">
            You can optionally filter on a Recessive1 and Recessive2 genes:
          </p>
          {/* Button Gene R1 */}
          {!gene_1 ? (
            <div className="r1-gene-filter-wrap">
              <Button
                type="button"
                className="Button Button-anchor"
                data-useinput="false"
                onClick={() => ShowGene("r1")}
              >
                + R1 gene filter
              </Button>
            </div>
          ) : (
            <div className="r1-gene-filter-wrap r-gene-filter-wrap-true">
              <div className="r1-gene-filter-wrap-wrap">
                <h2>Recessive1 gene</h2>
                <div className="GeneSelectInput">
                  <div className="search-input-container">
                    <div className="GeneSelectSearchInput">
                      <SearchTrait />
                    </div>
                  </div>
                  <div className="search-results-container">
                    <div className="search-results-wrap">
                      <div className="GeneSearchResults"></div>
                      <div className="GeneSearchResultsOptions">
                        <div className="non-pagination-actions-wrap">
                          {!showAll.includes("allR1") ? (
                            <Button
                              type="button"
                              className="Button Button-anchor"
                              onClick={() => onToogleShowAll("allR1")}
                            >
                              Show all
                            </Button>
                          ) : (
                            <SearchResult
                              showAll={showAll}
                              setShowAll={setShowAll}
                              type="allR1"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                type="button"
                className="Button Button-anchor btn-remove"
                onClick={() => setGene_1(false)}
              >
                Remove R1 Gene Filter
              </Button>
            </div>
          )}
          {/* Button Gene R2 */}
          {!gene_2 ? (
            <div className="r2-gene-filter-wrap">
              <Button
                type="button"
                className="Button Button-anchor"
                data-useinput="false"
                onClick={() => ShowGene("r2")}
              >
                + R2 gene filter
              </Button>
            </div>
          ) : (
            <div className="r2-gene-filter-wrap r-gene-filter-wrap-true">
              <div className="r2-gene-filter-wrap-wrap">
                <h2>Recessive2 gene</h2>
                <div className="GeneSelectInput">
                  <div className="search-input-container">
                    <div className="GeneSelectSearchInput">
                      <SearchTrait />
                    </div>
                  </div>
                  <div className="search-results-container">
                    <div className="search-results-wrap">
                      <div className="GeneSearchResults"></div>
                      <div className="GeneSearchResultsOptions">
                        <div className="non-pagination-actions-wrap">
                          {!showAll.includes("allR2") ? (
                            <Button
                              type="button"
                              className="Button Button-anchor"
                              onClick={() => onToogleShowAll("allR2")}
                            >
                              Show all
                            </Button>
                          ) : (
                            <SearchResult
                              showAll={showAll}
                              setShowAll={setShowAll}
                              type="allR2"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="Button Button-anchor btn-remove"
                onClick={() => setGene_2(false)}
              >
                Remove R2 Gene Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSection;
