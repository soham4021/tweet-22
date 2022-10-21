import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Soham Mukherjee",
      username: "_sohammukherjee",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/lama-chat-4cf40.appspot.com/o/Soham?alt=media&token=e9a5b8bc-ad32-425e-821b-dcc10de07539",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://images.pexels.com/photos/3075517/pexels-photo-3075517.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <input
            type="text"
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Optional : Enter image URL"
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
