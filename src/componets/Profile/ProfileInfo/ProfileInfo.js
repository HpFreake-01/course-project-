import React from 'react'
import userPhoto from '../../../images/user.jpg'
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    return (
        <div>
            <img alt='user' src={userPhoto}/>
            <div>
                {props.profile.userId}
            </div>
            <div>
                {props.profile.fullName}
            </div>
        
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;
