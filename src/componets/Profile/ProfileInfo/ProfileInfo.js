import React from 'react'
import userPhoto from '../../../images/user.jpg'

const ProfileInfo = (props) => {

    return (
        <div>
            <img alt='user' src={userPhoto}/>
            <div>
                {props.profile.userId}
            </div>
            <div>
                {props.profile.aboutMe}
            </div>
        </div>
    )
}

export default ProfileInfo;
