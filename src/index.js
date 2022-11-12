import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:54PM" 
        content="Nice blog post!" 
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 8:54PM" 
        content="I concur!" 
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Jane" 
        timeAgo="Yesterday at 2:54AM" 
        content="Wow! Thank you so much." 
        avatar={faker.image.avatar()} 
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));