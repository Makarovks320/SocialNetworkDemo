import React from 'react';
import PostContainer from './PostContainer.styles.js';
import Thumbnail from "../../../common/Thumbnail/thumbnail";

const Post = (props) => {
    return (
        <PostContainer styles={props.styles}>
            <div className="wrapper">
                <Thumbnail/>
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
