import React, { useState, useEffect } from "react";
//import axios from "axios";
import './App.css';
import News from './components/News/News.js'
import Searchbar from './components/Searchbar/Searchbar.js'

function App() {
  const [news, setNews] = useState({ hits: []});
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
  'https://hn.algolia.com/api/v1/search?query=redux',
);
  //useEffect(() => {
  //axios.get(`http://hn.algolia.com/api/v1/search?query=react`).then((res) => {
  //   const newsArray = res.data.hits;

  //   setNews(newsArray);
  //  });
  //}, []);
  useEffect(() => {

const getNews = async () => {
    try {
     const response = await fetch(url)
     //`http://hn.algolia.com/api/v1/search?query= + ${input.value}`
       if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        setNews(jsonResponse);
        return;
      }
      throw new Error("Request Failed!");
    } catch (error) {
      console.log(error);
    }
  };

  getNews();
}, [url]);
  



  return (
    <div className="App">
      <header>
        HACKER NEWS
      <Searchbar news={news} url={url} setUrl={setUrl} query={query} setQuery={setQuery}/>
      </header>
      <News news={news} />
    </div>
  );
}

export default App;
