import styled from "styled-components";

export const FormSection = styled.div``;
export const FormSectionHeaderWrap = styled.div`
  border-bottom: 1px solid #3a3f50;
  margin-bottom: 6px;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  color: #fff;
`;
export const FormSectionBodyWrap = styled.div``;
export const AllGenesInput = styled.div`
  margin-bottom: 30px;
`;
export const GeneSelectInput = styled.div`
  max-width: 500px;
  position: relative;
`;
export const GeneSelectSearchInput = styled.div`
  margin-bottom: 5px;
`;
export const GeneSearchResults = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GeneSearchResult = styled.div`
  margin-bottom: 2px;
  flex-grow: 1;
  padding: 15px;
  background: #282b39;
  border: 1px solid #3a3f50;
  border-radius: 5px;
  cursor: pointer;
`;
export const container = styled.div`
  display: grid;
  grid-template-columns: [left] 1fr [right] auto;
  grid-template-rows: [top] auto [bottom] auto;
  grid-template-areas:
    "name partid"
    "class specialgenes";
  grid-row-gap: 6px;
  row-gap: 6px;
  grid-column-gap: 30px;
  column-gap: 30px;
`;
export const axieClass = styled.div`
  grid-area: class;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #7c86db;
`;
export const axiePartId = styled.p`
  grid-area: partid;
  font-family: Roboto Mono;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  color: #91939a;
  align-content: baseline;
  text-align: right;
`;
export const axieSpecialGene = styled.p`
  color: #db7c7c;
`;

export const GeneSearchResultsOptions = styled.div``;
export const pagination = styled.div`
  display: flex;
  align-items: center;
`;
export const resultsDescription = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #91939a;
  margin-right: 20px;
`;
export const paginationOptions = styled.div`
  display: flex;
  cursor: pointer;
`;
export const svgPagination = styled.svg`
  height: 20px;
  margin-left: 10px;
`;
export const pFilter = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #91939a;
  margin-bottom: 10px;
  margin: 30px 0 10px;
`;
export const P = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #91939a;
  margin-bottom: 10px;
`;
export const inputWWrap = styled.div`
  display: inline-flex;
  padding: 6px 15px;
  background: #282b39;
  border: 1px solid #3a3f50;
  border-radius: 20px;
  align-items: center;
`;
export const Inputt = styled.input`
  background: none;
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  outline: none;
  border: none;
  min-width: 200px;
`;
export const svg = styled.svg`
  height: 20px;
  margin-right: 10px;
`;
export const selectedGenes = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
`;
export const SelectedGeneCard = styled.div`
  margin: 0 10px 10px 0;
  display: flex;
  align-items: center;
  padding: 7px 19px;
  cursor: pointer;
  background: #282b39;
  border: 1px solid #282b39;
  border-radius: 20px;
  border-color: green;
  &:hover {
    transform: scale(1.03);
  }
`;
export const geneId = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #91939a;
  margin-right: 20px;
  margin-bottom: 0;
`;
export const deleteIconWrap = styled.svg`
  height: 16px;
  width: 26px;
  padding-left: 10px;
  border-left: 1px solid #3a3f50;
`;
export const selectIconWrap = styled.svg`
  height: 16px;
  width: 26px;
  padding-left: 10px;
`;
