import React, { useState, useEffect } from "react";
import './App.css';
import News from './components/News/News.js'
import Searchbar from './components/Searchbar/Searchbar.js'

function App() {
  const [news, setNews] = useState({ hits: []});
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(
  'https://hn.algolia.com/api/v1/search?query=react',
);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getNews = async () => {
    setIsLoading(true);
    try {
     const response = await fetch(url)
       if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        setNews(jsonResponse);
        //return;
      }
      throw new Error("Request Failed!");
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  getNews();
}, [url]);
  



  return (
    <div className="App">
      <header>
        HACKER NEWS
      <Searchbar news={news} url={url} setUrl={setUrl} query={query} setQuery={setQuery}/>
      </header>
      <News news={news} isLoading={isLoading}/>
    </div>
  );
}

export default App;
