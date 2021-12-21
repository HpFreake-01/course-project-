import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../common/FormControl";

const ProfilelDataForm = ({handleSubmit}) =>{
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            <div>
                <b>Your fullname</b>: <div><Field placeholder={'Full Name'} component={Input} name={'fullName'}/></div>
            </div>
            <div>
                <b>Looking for a job</b>: <Field placeholder={'looking for a job'} type={'checkbox'} component={Input} name={'lookingForAJob'}/>
            </div>
            <div><b>My Profesionals Skills</b>
                <div><Field component={Input} name={'lookingForAJobDescription'} placeholder={'My profesional skills'}/></div>
            </div> 
            <div><b>About me</b>
                <div><Field component={Textarea} name={'aboutMe'} placeholder={'About Me'}/></div>
            </div>
        </form>
    )
}
const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfilelDataForm);

export default ProfileDataReduxForm;