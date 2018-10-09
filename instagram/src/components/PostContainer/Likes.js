import React from "react";
import "./PostContainer.css";

const Likes = () => {
  return (
    <div>
      <div className="post-icons">
        <div>
          <i className="far fa-heart" />
          <i className="far fa-comment" />
          <i className="far fa-share-square" />
        </div>
        <i className="far fa-bookmark" />
      </div>
      <div className="like-count">400 likes</div>
    </div>
  );
};

export default Likes;
