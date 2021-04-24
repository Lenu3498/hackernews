import React from "react";
import "./News.css";

export default function News({news}) {
  console.log(news)
  return (
    <div>
        <h2>I am the news section</h2>
        <ul>
    
        {news.length!==0 && news.hits.map((newsPost) => (
          <li key={newsPost.title}>
              <a href={newsPost.url} target="_blank">
              {newsPost.title}
              </a>
          </li>
        ))}
      </ul>
    </div>
  );
}