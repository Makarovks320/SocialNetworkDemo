import React, { useState } from 'react';
import {PersonalData, ProfileMenu} from './PersonalData.styles';
import Preloader from '../../common/preloader/preloader';
import userPic from '../../../img/genericUser.png'
import { ProfileData } from './ProfileData';
import { ProfileDataForm } from './ProfileDataForm';


const ProfileDescription = ({profile, isOwner, status, styles, saveAvatar, updateStatus, saveProfileData}) => {
    let [editMode, setEditMode] = useState(false);
  const activateEditMode = () => { 
    setEditMode(true)
  }
  const deactivateEditMode = () => { 
    setEditMode(false)
  }
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files[0]) {
            saveAvatar(e.target.files[0])
        }
    }
  return (
    <PersonalData styles={styles}>
        <div className="personalDataContainer">
        <div>
        <img className="avatar" alt="avatar"
        src={profile.photos.large || userPic} width="150px"/>
        {isOwner && 
            <ProfileMenu onChange={onMainPhotoSelected} styles={styles}>
                <label className="updatePhoto">Update photo<input type="file"/></label>
                {!editMode && <span className="setProfile" onClick={activateEditMode}>Edit profile data</span>}
            </ProfileMenu>
        }
        </div>

        {editMode ? <ProfileDataForm profile = {profile}
                                     deactivateEditMode = {deactivateEditMode}
                                     saveProfileData = {saveProfileData}/>:
                    <ProfileData  profile = {profile}
                                  status={status}
                                  updateStatus={updateStatus}
                                  isOwner={isOwner}/>}
        </div>
    </PersonalData>
  )
}

export default ProfileDescription;
