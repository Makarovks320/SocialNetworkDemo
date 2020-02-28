import React from 'react';
import {NavLink} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import StyledWrapper from './Users.styles.js'
import userPic from '../../img/genericUser.png'
import {Info} from './styles'

const User = ({user, followingInProgress, unfollowUser, followUser, styles}) => {

    return (
      <StyledWrapper  styles={styles}>
        <div className="row justify-content-start">
          <div className="col">
            <div className="avatar">
              <NavLink to={'/profile/'+ user.id}>
                  <img src={user.photos.small != null ? user.photos.small : userPic} alt="avatar" />
              </NavLink>
            </div>
            <Button disabled={followingInProgress.some(id=>id === user.id)}
            onClick={user.followed ? () => {unfollowUser(user.id)}: () => {followUser(user.id)}}>
              {user.followed ? "Unfollow" : "Follow"}</Button>
          </div>
          <div className="col">
              <Info isFollowed={user.followed} styles={styles}>
                <div className={'row'} >
                  <div className="col">
                    <div>{user.name}</div>
                  </div>
                  <div className="col">
                    <div>{user.status}</div>  
                  </div>
                </div>
              </Info>
          </div>
        </div>
        </StyledWrapper>)
}

export default User;