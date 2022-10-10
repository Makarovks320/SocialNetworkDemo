import React, {useState, useEffect} from 'react';
import {Status} from './PersonalData.styles';


const ProfileStatusWithHook = (props) => {
    let [editMode, setEditMode] = useState(false); //присваивание деструктуризацией
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let [status, setStatus] = useState(props.status);
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    return (
        <>
            {!editMode && props.isOwner &&
            <div onClick={activateEditMode}>
                <Status status={props.status}
                        isOwner={props.isOwner}>{status || (props.isOwner && 'set a status message')}</Status>
            </div>
            }
            {editMode && props.isOwner &&
            <div>
                <input className="form-control" autoFocus={true} onChange={onStatusChange} value={status}
                       onBlur={deactivateEditMode}/>
            </div>
            }
        </>
    )
}

export default ProfileStatusWithHook;