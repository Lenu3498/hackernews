import React, { useState } from 'react';
import "./Searchbar.css";

export default function Searchbar({news, url, setUrl, query, setQuery}) {
    const[inputValue, setInputValue] = useState( " ");

    function handleOnKeyDown({ keyCode, target }){
        if(keyCode === 13) {
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
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
    <div>

        <input 
            onKeyDown={handleOnKeyDown} 
            onChange={event => setQuery(event.target.value)}
            type="text" 
            value={query}
            placeholder="Search.."/>
        <button
            type="button"
            onClick={() =>
            setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
            <i className = "fa fa-search"></i>
        </button>

    </div>
  );
}