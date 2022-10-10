// import React from 'react';
// import ReactDOM from 'react-dom';
import profileReducer, {addPost} from './profile_reducer';


it('adds a new post', () => {
    //1. test data
    let action = addPost('some text');
    let state = {
        posts: [
            {
                id: 3,
                datetime: '2019-11-18T09:54',
                author: 'Anastacia Zavorotnyuk',
                text: 'Скиньте деньги на лечение, пожалуйста!',
                likesCount: '289'
            },
            {
                id: 2,
                datetime: '2017-11-18T09:54',
                author: 'Anastacia Zavorotnyuk',
                text: 'adsasdas',
                likesCount: '150'
            },
            {
                id: 1,
                datetime: '2016-11-18T09:54',
                author: 'Anastacia Zavorotnyuk',
                text: 'Post content: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi sed facilis eos, dolorum enim vel distinctio doloremque molest',
                likesCount: '64'
            }
        ]
    };
    // 2.action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});
