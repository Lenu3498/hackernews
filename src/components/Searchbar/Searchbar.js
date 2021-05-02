import React, { useState } from 'react';
import "./Searchbar.css";

export default function Searchbar({ setUrl }) {
    const[inputValue, setInputValue] = useState(" ");

    function handleOnKeyDown({ keyCode }){
        if(keyCode === 13) {
          setUrl(`http://hn.algolia.com/api/v1/search?query=${inputValue}`)
      }
    }

    function handleInputValue({target}){
        setInputValue(target.value);
    }

  //function compareInput(){
    //let searchString = inputValue.toLowerCase().split(' ')
    //console.log(news.hits.filter(string => {
      //  let containsAtLeastOneWord = false;
        // If at least a word is matched return it!
        //searchString.forEach(word => {
          //  if (string.title.toLowerCase().includes(word))
            //    containsAtLeastOneWord = true;
        //})
        //if (containsAtLeastOneWord)
          //  return string
    //}));

        // if(news.contains())
        // const results = news.filter()
  //}

  return (
    <div className="container__searchbar">
        <input 
            className="input__searchbar"
            onKeyDown={handleOnKeyDown} 
            onChange={handleInputValue}
            //{event => setQuery(event.target.value)}
            type="search" 
            value={inputValue}
            placeholder="Search.."/>
        <button
            //type="button"
            onClick={() =>
            setUrl(`http://hn.algolia.com/api/v1/search?query=${inputValue}`)
        }>
            <i className = "fa fa-search"></i>
        </button>

    </div>
  );
}