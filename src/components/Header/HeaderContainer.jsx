import React from 'react';
import {connect} from 'react-redux';
import {logOut} from '../../redux/auth_reducer';
import {setDarkTheme, setLightTheme, setBlueTheme} from '../../redux/theme_reducer'
import Header from './Header';

class HeaderContainer extends React.Component {
    render() {
        return (
            <div>
                <Header {...this.props}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        styles: state.theme.themeColors,
    }
}

export default connect(mapStateToProps, {logOut, setDarkTheme, setLightTheme, setBlueTheme})(HeaderContainer);
