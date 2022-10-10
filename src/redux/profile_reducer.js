import {usersAPI, profileAPI} from "../api/api"
import {stopSubmit} from 'redux-form'

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SET_AVATAR = 'SET_AVATAR'

const initialState = {
    posts: [
        {
            id: 2,
            datetime: '04-09-2019 16:53',
            author: 'Kirill Makarov',
            text: 'adsasdas',
            likesCount: '150'
        },
        {
            id: 1,
            datetime: '18-11-2019 20:21',
            author: 'Kirill Makarov',
            text: 'Post content: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi sed facilis eos, dolorum enim vel distinctio doloremque molest',
            likesCount: '64'
        }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const date = new Date();
            const localDate = date.toLocaleDateString().replace(/\./g, '-');
            const localTime = date.toLocaleTimeString().slice(0, 5);
            const newPost = {
                id: +state.posts[0].id + 1,
                datetime: `${localDate} ${localTime}`,
                author: action.userName || 'Anastacia Zavorotnyuk',
                text: action.newPostBody,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts]};
        }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_AVATAR:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        default:
            return state;
    }
}

export const addPost = (newPostBody, userName) => ({type: ADD_POST, newPostBody, userName})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const setAvatarSuccess = (photos) => ({type: SET_AVATAR, photos})

export const getUserProfile = (userId) => async (dispatch) => {
    const data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    } else {
        console.log('error: status update')
    }
}

export const saveAvatar = (photo) => async (dispatch) => {
    const response = await profileAPI.saveAvatar(photo)
    if (response.data.data.resultCode === 0) {
        dispatch(setAvatarSuccess(response.data.photos))
    } else {
        console.log('error: avatar update')
    }
}

export const saveProfileData = (formData) => async (dispatch, getState) => {
    const response = await profileAPI.saveProfileData(formData);
    const userId = getState().auth.userId;
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}
export default profileReducer;