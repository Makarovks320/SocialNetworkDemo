import React from 'react';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

const Profile = ({profile, status, updateStatus, addPost, posts, styles, isOwner, saveAvatar, saveProfileData}) => {
    return (
        <main>
            <ProfileDescription isOwner={isOwner}
                                saveAvatar={saveAvatar}
                                profile={profile}
                                status={status}
                                updateStatus={updateStatus}
                                styles={styles}
                                saveProfileData={saveProfileData}/>
            {isOwner &&
            <NewPost addPost={addPost} styles={styles}
                     profile={profile}/>
            }
            {isOwner &&
            <Posts posts={posts} styles={styles}/>
            }
        </main>
    )
}

export default Profile;
