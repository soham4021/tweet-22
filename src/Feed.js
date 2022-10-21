import React, { useState } from "react";
import { useEffect } from "react";
import "./Feed.css";
import db from "./firebase";
import Post from "./Post";
import TweetBox from "./TweetBox";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* 1:10:49
     Contents --> Header, TweetBox, Post
    */}
      {/* 1:35:00 --> Building tweetbox */}
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.data.displayName}
            username={post.data.username}
            verified={post.data.verified}
            image={post.data.image}
            text={post.data.text}
            avatar={post.data.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
