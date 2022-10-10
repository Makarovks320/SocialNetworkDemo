import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {addPost, getUserProfile, getUserStatus, updateStatus, saveAvatar, saveProfileData } from '../../redux/profile_reducer';
import {withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId){ userId = this.props.currentUserID};
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  componentDidMount () {
    this.refreshProfile()
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile()
    }
  }
  render() {
    return ( 
        <Profile {...this.props}
                  isOwner={!this.props.match.params.userId}/>
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  posts: state.profilePage.posts,
  status: state.profilePage.status,
  newPostText: state.profilePage.newPostText,
  currentUserID: state.auth.userId,
  isAuth: state.auth.isAuth,
  styles: state.theme.themeColors,
  saveProfileData: state.profilePage
});

export default compose(
  connect(mapStateToProps, {addPost, getUserProfile, getUserStatus, updateStatus, saveAvatar, saveProfileData}),
  withRouter,
  withAuthRedirect)(ProfileContainer)
