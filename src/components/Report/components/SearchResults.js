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

  // get information pagination
  const start =
    Object.values(pageNumber)[Object.keys(pageNumber).indexOf(type)].start;
  const end =
    Object.values(pageNumber)[Object.keys(pageNumber).indexOf(type)].end;
  const total = pageResult.length;

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
  const optionPagination = (option, type) => {
    switch (option) {
      // Return first page
      case "first":
        return dispatch(
          setPageNumber({
            ...pageNumber,
            [type]: {
              start: 0,
              end: total > 5 ? 5 : total,
            },
          })
        );
      // Previous to page
      case "prev":
        return dispatch(
          setPageNumber({
            ...pageNumber,
            [type]: {
              start: start <= 5 ? 0 : start - 5,
              end:
                end - start >= 5
                  ? start !== 0
                    ? end - 5
                    : 5
                  : end === total
                  ? end - (total % 5)
                  : end,
            },
          })
        );
      // Next to page
      case "next":
        return dispatch(
          setPageNumber({
            ...pageNumber,
            [type]: {
              start:
                total - end >= 5
                  ? start + 5
                  : total - end === 0
                  ? start
                  : total - (total - end),
              end: total - end >= 5 ? end + 5 : total,
            },
          })
        );
      //Return last page
      case "last":
        return dispatch(
          setPageNumber({
            ...pageNumber,
            [type]: {
              start: total % 5 === 0 ? total - 5 : total - (total % 5),
              end: total,
            },
          })
        );
    }
  };
  // Pagination page change type
  const onToogleChangePage = (option) => {
    switch (type) {
      case "all":
        optionPagination(option, "all");
        break;
      case "allR1":
        optionPagination(option, "allR1");
        break;
      case "allR2":
        optionPagination(option, "allR2");
        break;
    }
  };

  // return data show
  const ShowPages = () => {
    // get information search
    const key = Object.keys(searchResult);
    const index = Object.keys(searchResult).indexOf(type);
    const value = Object.values(searchResult);

    if (pageResult) {
      return key.includes(type)
        ? pageResult
            .slice(start, end)
            .filter(
              (o) =>
                o.eyes.toLowerCase().includes(value[index]) ||
                o.attribute.toLowerCase().includes(value[index])
            )
        : pageResult.slice(start, end);
    }
  };

  return (
    <div className="search-results-container">
      <div className="search-results-wrap">
        <Style.GeneSearchResults>
          {ShowPages().map((o, index) => (
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
                {`Showing ${start} - ${total > 5 ? end : total} of ${total}`}
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
