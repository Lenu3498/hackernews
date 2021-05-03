import React, { useState } from 'react';
import "./Searchbar.css";

export default function Searchbar({ setUrl }) {
    const[inputValue, setInputValue] = useState(" ");

    function handleOnKeyDown({ keyCode }){
        if(keyCode === 13) {
          setUrl(`https://hn.algolia.com/api/v1/search?query=${inputValue}`)
      }
    }

    function handleInputValue({target}){
        setInputValue(target.value);
    }

  return (
    <div className="container__searchbar">
        <input 
            className="input__searchbar"
            onKeyDown={handleOnKeyDown} 
            onChange={handleInputValue}
            type="search" 
            value={inputValue}
            placeholder="Search..."/>
        <button
            onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${inputValue}`)
        }>
            <i className = "fa fa-search"></i>
        </button>

    </div>
  );
}