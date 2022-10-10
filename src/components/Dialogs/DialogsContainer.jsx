import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addMessageActionCreator} from '../../redux/messages_reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


const mapStateToProps = (state) => ({
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    newMessageBody: state.messagesPage.newMessageBody,
    styles: state.theme.themeColors,
})

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (sendMessageBody) => {
            dispatch(addMessageActionCreator(sendMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);