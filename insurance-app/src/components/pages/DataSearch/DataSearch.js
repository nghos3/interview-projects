import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import  './styles.scss';

function DataSearch() {
  const [value, setValue] = useState(null);
  const inputRef = useRef(null);
  

    const seachByPolicyId = (e) => {
        console.log(e, inputRef.current.value);
        e.preventDefault();
        if(inputRef?.current?.value) {
          const url = `http://localhost:9000/api/policy/${inputRef.current.value}`;
          // value !== null ? setValue(null) : '';
          fetch(url).then(res=> res?.json()).then(data => {
          // setValue(data);
        if(data){
          setValue(data); 
        }
        }).catch((e) =>
          alert('error in input', e.message)
        );
        }
        
      }
  
  const renderTable = (data) => {
    if(data?.length) {
      return '';
    } else {
      const keys = Object.keys(data);
      return (
        <table>
        <thead>
          {keys && keys.map((e) =>
            <tr>{e}</tr>)}
        </thead>
        <tbody>
        {keys && keys.map((e) =>
            <tr>{data[e]}</tr>
          )}
        </tbody>
      </table>
      );
    }
  }

  const SearchBar = () => (
    <div className='data-search-serachbar'>
     <input
          type="text"
          id="header-search"
          placeholder="Search"
          name="s"
          ref={inputRef}
      />
        <button type="submit" onClick={seachByPolicyId}>Search</button>
      </div>
);

  return (
    <div className='data-search'>
      <h1>Policy Search</h1>
       {SearchBar()}
      <div className='data-search-table'>
        {/* {(!value) &&  seachByPolicyId(12345)} */}
        {value && renderTable(value)}
      </div>
    </div>
  );
}
export default DataSearch;