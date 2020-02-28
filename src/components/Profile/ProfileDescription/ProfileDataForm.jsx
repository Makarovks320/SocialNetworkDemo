import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Accordion, Card } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { Input, createField, Textarea } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';
import { PersonalDataForm } from './PersonalData.styles';
import s from '../../common/FormsControls/FormsControls.module.css'


const EditProfileForm = ({ profile, deactivateEditMode, handleSubmit, error }) => {
    return (
    <PersonalDataForm>
        <Form className="form" onSubmit={handleSubmit}>
        {error && <span className={s.summaryError}>{error}</span>}
        <table>
            <tbody>
                    <tr className="formRow">
                        <td><span>Full name: </span></td>
                        <td>{createField(Input, "fullName", [required], "Full name")}</td>
                    </tr>
                    <tr className="formRow">
                        <td><span>About me: </span></td>
                        <td>{createField(Textarea, "aboutMe", [], "About me")}</td>
                    </tr>
                    <tr className="formRow">
                        <td><span>Looking for a job:</span></td>
                        <td><Field component={"input"} name="lookingForAJob" type="checkbox"/></td>
                    </tr>
                    <tr className="formRow">
                        <td><span>Description about job: </span></td>
                        <td>{createField(Textarea, "lookingForAJobDescription", [required], "Professional skills")}</td>
                    </tr>
            </tbody>
        </table>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Show Contacts
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1"  id="collapsetbody" className="collapsetbody">
                        <table>
                            <tbody>
                                {Object.keys(profile.contacts).map(key => {
                                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                                })}
                            </tbody>
                        </table>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Button variant="success" type="submit">Save</Button>
            <Button variant="secondary" onClick={deactivateEditMode} style={{float: "right"}}>Cancel</Button>
        </Form>
    </PersonalDataForm>
  )
}
const EditProfileReduxForm = reduxForm({ form: 'editProfile' })(EditProfileForm)

export const ProfileDataForm = ({profile, deactivateEditMode, saveProfileData}) => {
    const onSubmit = (formData) => {
            saveProfileData(formData)
            .then( () => deactivateEditMode() )
    }
    return (
        <EditProfileReduxForm profile={profile} initialValues={profile} onSubmit={onSubmit} deactivateEditMode={deactivateEditMode}/>
    )
}

const Contact = ({contactTitle}) => {
    return (
        <tr className="formRow">
            <td><span>{contactTitle}: </span></td>
            <td>{createField(Input, 'contacts.'+ contactTitle, [], contactTitle, '')}</td>
        </tr>
    )
}