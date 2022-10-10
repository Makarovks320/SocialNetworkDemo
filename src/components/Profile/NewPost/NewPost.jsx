import React from 'react';
import {NewPostContainer} from './NewPostContainer';

export const NewPost = React.memo(props => {
    const addPost = (formData) => {
        props.addPost(formData.newBody, props.profile.fullName);
    }
    return (
        <NewPostContainer styles={props.styles} onSubmit={addPost}/>
    )
})

export default NewPost;
