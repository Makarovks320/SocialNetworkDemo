import React from 'react';
import s from './preloader.module.css';
import Spinner from 'react-bootstrap/Spinner'


const Preloader = () => {
    return (
        <div className={s.overlay}>
            <div className={s.preloader}>
                <div>
                    <Spinner animation="border" variant="secondary"/>
                    <br/>
                    Loading...please wait
                </div>
            </div>
        </div>
    )
}
export default Preloader;
