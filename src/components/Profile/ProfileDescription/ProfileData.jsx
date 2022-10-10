import React from 'react';
import Table from 'react-bootstrap/Table'
import {Accordion, Card} from 'react-bootstrap'
import ProfileStatusWithHook from './ProfileStatusWithHook';

export const ProfileData = ({profile, isOwner, status, updateStatus}) => {
    return (
        <div className="profileDataContainer">
            <h5>{profile.fullName}</h5>
            <ProfileStatusWithHook status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            <Table className="table">
                <caption>
                    Profile information:
                </caption>
                <tbody>
                <tr>
                    <td>About me:</td>
                    <td>{profile.aboutMe}</td>
                </tr>
                <tr>
                    <td>lookingForAJob:</td>
                    <td>{profile.lookingForAJob ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                    <td>Description about job:</td>
                    <td>{profile.lookingForAJobDescription}</td>
                </tr>
                </tbody>
            </Table>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Show Contacts
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Table>
                            <tbody>
                            {Object.keys(profile.contacts).map(key => {
                                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                            })}
                            </tbody>
                        </Table>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <tr>
            <td>{contactTitle}:</td>
            <td><a href={contactValue}>{contactValue}</a></td>
        </tr>
    )
}