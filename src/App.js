import React, { useState, useEffect } from "react";
import './App.css';
import News from './components/News/News.js'
import Searchbar from './components/Searchbar/Searchbar.js'

function App( {inputValue}) {
  console.log(inputValue);
  const [news, setNews] = useState({ hits: []});
  // const [query, setQuery] = useState('');
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=hackernews',
  );
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    const getNews = async () => {
      setIsError(false);
      setIsLoading(true);
    try {
     const response = await fetch(url)
       if (response.ok) {
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        setNews(jsonResponse);
        setIsLoading(false);
        return;
      }
      throw new Error("Request Failed!");
    } catch (error) {
      setIsError(true);
    }

    
  };

  getNews();
}, [url]);
  



  return (
    <div className="App">

      <header className="header">
          <h1>HACKER NEWS</h1>    
      </header>

      <Searchbar className="searchbar" 
      news={news} 
      url={url} 
      setUrl={setUrl} 
      // query={query} 
      // setQuery={setQuery}
      />
      
      <main>
      <News news={news} isLoading={isLoading} isError={isError} setIsError= {setIsError}/>
      </main>
      
      <footer className="footer">
        <p>© 2021</p>
      </footer>
    </div>
  );
}

export default App;
