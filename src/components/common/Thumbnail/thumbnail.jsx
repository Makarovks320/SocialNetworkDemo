import React from "react";
import {withRouter} from 'react-router-dom';
import userPic from "../../../img/genericUser.png";
import {connect} from 'react-redux';
import s from "./thumbnail.module.css";
import {getUserProfile} from "../../../redux/profile_reducer";
import {compose} from "redux";

class Thumbnail extends React.Component {
    refreshThumbnail() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.currentUserId
        }
        ;
        this.props.getUserProfile(userId);
    }

    componentDidMount() {
        this.refreshThumbnail();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshThumbnail();
        }
    }

    render() {
        if (!this.props.profile) {
            return (
                <div className={s.thumbnail}>
                    <img className={s.avatar} alt="avatar" src={userPic} width="100%"/>
                </div>
            )
        }
        return (
            <div className={s.thumbnail}>
                <img className={s.avatar} alt="avatar" src={this.props.profile.photos.small || userPic} width="100%"/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentUserId: state.auth.userId
});
export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter)(Thumbnail);
