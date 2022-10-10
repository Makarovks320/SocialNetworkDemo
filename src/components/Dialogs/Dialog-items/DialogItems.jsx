/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './DialogItems.module.css';
import DialogItem from './DialogItem/DialogItem';

const DialogItems = (props) => {
    let dialogs_elements = props.dialogs
        .map(d => <DialogItem name={d.name} surname={d.surname} key={d.user_id}/>)
    return (
        <div className={s.dialog_items}>
            {dialogs_elements}
        </div>
    )
}

export default DialogItems;