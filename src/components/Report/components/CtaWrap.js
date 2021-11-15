import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCreateFilter, CreateFilter } from "../../../reducer/store";
import * as Style from "../../../styles/CtaWrap";

const CtaWrap = () => {
  const dispatch = useDispatch();
  const { createFilter, listChoose } = useSelector((state) => state.store);

  useEffect(() => {
    dispatch(
      setCreateFilter({
        ...createFilter,
        data: {
          ...createFilter.data,
          parts: listChoose,
        },
      })
    );
  }, [listChoose]);

  const onToogleSubmit = () => {
    dispatch(CreateFilter(createFilter));
    console.log(createFilter);
  };

  return (
    <Style.ctaWrap>
      <Style.Button type="Style.ctaWrap" onClick={onToogleSubmit}>
        <span>Create filter</span>
      </Style.Button>
    </Style.ctaWrap>
  );
};

export default CtaWrap;
