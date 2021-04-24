import React, { useState, useEffect } from "react";
//import axios from "axios";
import './App.css';
import News from './components/News/News.js'

function App() {
  const [news, setNews] = useState([]);

  //useEffect(() => {
  //axios.get(`http://hn.algolia.com/api/v1/search?query=react`).then((res) => {
  //   const newsArray = res.data.hits;

  //   setNews(newsArray);
  //  });
  //}, []);
  useEffect(() => {

const getNews = async () => {
    try {
     const response = await fetch('http://hn.algolia.com/api/v1/search?query=react')
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
}, []);
  



  return (
    <div className="App">
      <header>
        HACKER NEWS
      </header>
      <News news={news}/>
    </div>
  );
}

export default App;
