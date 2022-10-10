import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import {Col, Row, Container} from 'react-bootstrap'
import HeaderContainer from './components/Header/HeaderContainer';
import Preloader from './components/common/preloader/preloader';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import {initializeApp} from './redux/app_reducer';
import {withSuspense} from './hoc/withSuspense';
import s from './App.css'

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Container className={s.container}>
                    <Row>
                        <Col xs={12} sm={3}><Navbar/></Col>
                        <Col xs={12} sm={9}>
                            <div>
                                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                <Route path='/users' render={withSuspense(UsersContainer)}/>
                                <Route path='/login' render={() => <Login/>}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);