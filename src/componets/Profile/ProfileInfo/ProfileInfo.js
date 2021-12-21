import React, {useState} from 'react'
import userPhoto from '../../../images/user.jpg'
import Preloader from '../../common/Preloader';
import ProfileDataReduxForm from './ProfileDataForm';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = ({saveProfile, ...props}) => {

    const [editMode, setEditMode] = useState(false)

    if(!props.profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) =>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (dataForm) =>{
        saveProfile(dataForm);
        setEditMode(false);
        console.log(dataForm);
    }

    return (
        <div>
            <img alt='user' src={props.profile.photos != null ? props.profile.photos.large : userPhoto}/>
            <div>
                {props.isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
            </div>
            {editMode ? 
                <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit}/> : <ProfileData profile={props.profile}
                isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}}/>}
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) =>{
    return <>
            <div>
                {isOwner && <button onClick={goToEditMode}>Edit</button>}
            </div>
            <div>
                <b>Your id:</b> {profile.userId}
            </div>
            <div>
                <b>Your fullname</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            {profile.lookingForAJob && 
                <div><b>My Profesionals Skills</b> {profile.lookingForAJobDescription}</div> 
            }
    </>
}


export default ProfileInfo;
