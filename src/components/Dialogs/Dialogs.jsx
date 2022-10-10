import React from 'react';
import StyledWrapper from './Dialogs.styles.js';
import DialogItems from './Dialog-items/DialogItems';
import Messages from './Messages/Messages';
import {NewPostContainer} from '../Profile/NewPost/NewPostContainer';

const Dialogs = (props) => {
    const addNewMessage = (formData) => {
        props.sendMessage(formData.newBody)
    }
    return (
        <div>
            <StyledWrapper styles={props.styles}>
                <DialogItems dialogs={props.dialogs}/>
                <Messages messages={props.messages}/>
            </StyledWrapper>
            <NewPostContainer styles={props.styles} onSubmit={addNewMessage}/>
        </div>

    )
}

export default Dialogs