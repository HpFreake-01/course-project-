import React from 'react'
import userPhoto from '../../../images/user.jpg'
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) =>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <img alt='user' src={props.profile.photos != null ? props.profile.photos.large : userPhoto}/>
            <div>
                {props.isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
            </div>
            <div>
                {props.profile.userId}
            </div>
            <div>
                {props.profile.fullName}
            </div>
            <div>
                {props.profile.lookingForAJob}
            </div>
            <div>
                {props.profile.lookingForAJobDescription}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;
