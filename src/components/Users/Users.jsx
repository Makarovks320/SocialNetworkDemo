import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User';

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Pagination totalItemsCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        portionSize={10}/>

            {users.map(u => <User key={u.id}
                                  user={u}
                                  followingInProgress={props.followingInProgress}
                                  unfollowUser={props.unfollowUser}
                                  followUser={props.followUser}
                                  styles={props.styles}/>
            )}
        </div>)
}

export default Users;