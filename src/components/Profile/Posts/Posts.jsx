import React from 'react';
import Post from './Post/Post';


const Posts = React.memo(props => {
    let postsElements = props.posts.map((p) => <Post key={p.id} datetime={p.datetime}
                                                     author={p.author} text={p.text} likesCount={p.likesCount}
                                                     styles={props.styles}/>)
    return (
        <div>
            {postsElements}
        </div>
    )
})

export default Posts;