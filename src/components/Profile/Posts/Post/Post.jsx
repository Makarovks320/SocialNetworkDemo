import React from 'react';
import PostContainer from './PostContainer.styles.js';

const Post = (props) => {
  return (
    <PostContainer styles={props.styles}>
      <div className="wrapper">
        <div className="thumbnail">
          <img className="avatar" alt="avatar" 
          src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="100%" />
        </div>
        <div className="post_info">
          <span>{props.author}</span>
          <time>{props.datetime}</time>
        </div>
      </div>
      <div className="content">
        {props.text}
      </div>
      <div className="likesCount">
        <span>{props.likesCount} likes</span>
      </div>
    </PostContainer>
  )
}

export default Post;
