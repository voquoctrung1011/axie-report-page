/* eslint-disable default-case */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { Button, Pagination } from "antd";
import * as Style from "../../../styles/FormSection";
import { useSelector, useDispatch } from "react-redux";
import {
  setShowAll,
  setPageNumber,
  setSearchResult,
} from "../../../reducer/store";

const SearchResult = ({ type }) => {
  const dispatch = useDispatch();
  const { showAll, pageResult, pageNumber, searchResult } = useSelector(
    (state) => state.store
  );

  // Close show all search data
  const onToogleCloseShow = () => {
    const newShowAll = [...showAll];
    const aIndex = newShowAll?.indexOf(type);
    if (aIndex !== -1) {
      newShowAll.splice(aIndex, 1);
    }
    dispatch(setShowAll(newShowAll));
  };

  // Pagination page change data
  const onToogleChangePage = (type) => {
    dispatch(setSearchResult({ text: "", type: type }));
    switch (type) {
      // Return first page
      case "first":
        return dispatch(
          setPageNumber({
            start: 0,
            end: pageResult.length > 5 ? 5 : pageResult?.length,
          })
        );
      // Previous to page
      case "prev":
        return dispatch(
          setPageNumber({
            start: pageNumber.start <= 5 ? 0 : pageNumber.start - 5,
            end:
              pageNumber.end - pageNumber.start >= 5
                ? pageNumber.start !== 0
                  ? pageNumber.end - 5
                  : 5
                : pageNumber.end === pageResult.length
                ? pageNumber.end - (pageResult.length % 5)
                : pageNumber.end,
          })
        );
      // Next to page
      case "next":
        return dispatch(
          setPageNumber({
            start:
              pageResult.length - pageNumber.end >= 5
                ? pageNumber.start + 5
                : pageResult.length - pageNumber.end === 0
                ? pageNumber.start
                : pageResult.length - (pageResult.length - pageNumber.end),
            end:
              pageResult.length - pageNumber.end >= 5
                ? pageNumber.end + 5
                : pageResult.length,
          })
        );
      //Return last page
      case "last":
        return dispatch(
          setPageNumber({
            start:
              pageResult?.length % 5 === 0
                ? pageResult?.length - 5
                : pageResult.length - (pageResult?.length % 5),
            end: pageResult?.length,
          })
        );
    }
  };

  // return data show
  const ShowPages = (start, page) => {
    if (pageResult) {
      return pageResult
        .slice(start ? start : 0, page ? page : 5)
        .filter(
          (o) =>
            o.eyes.toLowerCase().includes(searchResult.text) ||
            o.attribute.toLowerCase().includes(searchResult.text)
        );
    }
  };

  return (
    <div className="search-results-container">
      <div className="search-results-wrap">
        <Style.GeneSearchResults>
          {ShowPages(pageNumber.start, pageNumber.end).map((o, index) => (
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
              total={searchResult?.length}
              showTotal={(total, range) =>
                `Showing${range[0]}-${range[1]} of ${total}`
              }
              defaultPageSize={5}
              defaultCurrent={1}
            /> */}
            {/* Pagination custom */}
            <Style.pagination>
              <Style.resultsDescription className="results-description">
                {/* Check length page & show information page */}
                {`Showing ${pageNumber.start} - ${
                  pageResult.length > 5 ? pageNumber.end : pageResult.length
                } of ${pageResult.length}`}
              </Style.resultsDescription>
              <Style.paginationOptions>
                <div
                  className="first-page"
                  onClick={() => onToogleChangePage("first")}
                >
                  <Style.svgPagination viewBox="0 0 24 24" fill="none">
                    <path d="M11 17L6 12L11 7" stroke="#3082F2"></path>
                    <path d="M18 17L13 12L18 7" stroke="#3082F2"></path>
                  </Style.svgPagination>
                </div>
                <div
                  className="back-page"
                  onClick={() => onToogleChangePage("prev")}
                >
                  <Style.svgPagination viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#3082F2"></path>
                  </Style.svgPagination>
                </div>
                <div
                  className="next-page"
                  onClick={() => onToogleChangePage("next")}
                >
                  <Style.svgPagination
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-disabled
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#3082F2"
                      aria-disabled
                    ></path>
                  </Style.svgPagination>
                </div>
                <div
                  className="last-page"
                  onClick={() => onToogleChangePage("last")}
                >
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
