import React from "react";
import TimeAgo from 'timeago-react'; 
import "./News.css";


export default function News ({ news, isLoading, isError}) {
  return (
<div>
{
    isError ? (<h4>Failed to load results, something went wrong ... </h4>) : (
    isLoading ? (
      <div>
     <div>Loading news...</div>
     <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
     </div>
    ) : (
   <ol>
    {news.hits.length!==0 ? (news.hits.map((newsPost) => (
                    <li key={newsPost.objectID}>
                    <a href={newsPost.url} target="_blank" rel="noreferrer">
                    {newsPost.title}
                    </a>
                    <div className="information">
                      <span>{newsPost.points} points</span> | <span>{newsPost.author} | </span>   
                     <span><TimeAgo datetime={newsPost.created_at} /></span> | {newsPost.num_comments} comments
                     </div>
                </li>


        ))) : (<h4> No results match your search, please try again. </h4>)
        }
    </ol>
    )
    )
}
  </div>
);
}