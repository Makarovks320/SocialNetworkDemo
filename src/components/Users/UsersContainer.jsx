import React from 'react';
import {connect} from 'react-redux';
import {setCurrentPage, requestUsers, followUser, unfollowUser} from '../../redux/users_reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import {compose} from 'redux';
import {
    getUsers,
    getTotalUsersCount,
    getPageSize,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress
} from '../../redux/users_selectors';

// import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return (<div>
                {this.props.isFetching ? <Preloader/> : null}

                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                       followUser={this.props.followUser}
                       unfollowUser={this.props.unfollowUser}
                       styles={this.props.styles}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        styles: state.theme.themeColors
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {setCurrentPage, requestUsers, followUser, unfollowUser})
)(UsersContainer)
