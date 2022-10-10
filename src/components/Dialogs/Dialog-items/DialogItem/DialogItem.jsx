import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './DialogItem.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id
  return (
    <NavLink to={path} className={s.item}>
      {props.name + ' ' + props.surname}
    </NavLink>
  )
}

export default DialogItem;