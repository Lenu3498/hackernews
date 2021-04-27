import React from "react";
import TimeAgo from 'timeago-react'; 
import "./News.css";

export default function News({ news, isLoading }) {
  console.log(news)
  return (
    <div>
        <h2>Results</h2>

        {isLoading ? (
         <div>Loading news...</div>
        ) : ( 
        <ul>
        {news.length!==0 && news.hits.map((newsPost) => (
          <li key={newsPost.objectID}>
              <a href={newsPost.url} target="_blank" rel="noreferrer">
              {newsPost.title}
              </a>
              <div>
                <span>{newsPost.points} points</span> | <span>{newsPost.author} | </span>   
               <span><TimeAgo datetime={newsPost.created_at} /></span> | {newsPost.num_comments} comments</div>
              <div></div>
          </li>
        ))}
      </ul>
      )}
    </div> 
    );
}