import {usersAPI} from '../api/api'

const CHANGE_FOLLOW_STATUS = 'users/CHANGE_FOLLOW_STATUS'
const SET_USERS = 'users/SET_USERS'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const TOGGLE_FETCHING = 'users/TOGGLE_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    totalUsersCount: 1,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        u.followed = !u.followed
                    }
                    return u
                }),
            }

        case SET_USERS:
            return {...state, users: action.users}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isfetching}

        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}

export const followStatusChange = (userId) => ({type: CHANGE_FOLLOW_STATUS, userId: userId})

export const setUsers = (userslist) => ({type: SET_USERS, users: userslist})

export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count: count})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const toggleIsFetching = (isfetching) => ({type: TOGGLE_FETCHING, isfetching})

export const toggleFollowingProgress = (isfetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isfetching, userId})

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

const follwUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) dispatch(actionCreator(userId))
    dispatch(toggleFollowingProgress(false, userId))
}

export const followUser = (userId) => async (dispatch) => {
    follwUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followStatusChange)
}

export const unfollowUser = (userId) => async (dispatch) => {
    follwUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), followStatusChange)
}


export default usersReducer;