const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
    dialogs: [
        {
            name: "Alexander",
            surname: "Pushkin",
            user_id: "1",
        }
    ],
    messages: [
        {
            id: 1,
            message: "The less a woman we love, the easier she likes us...",
            user_id: 1
        },
    ],
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_MESSAGE': {
            let newMessage = {
                id: +state.messages[state.messages.length - 1].id + 1,
                author_id: '0',
                message: action.sendMessageBody,
            }
            let stateCopy = {
                ...state,
                messages: [...state.messages]
            }
            if (stateCopy.newMessageBody !== '') {
                stateCopy.messages.push(newMessage);
            }
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (sendMessageBody) => ({
    type: ADD_MESSAGE, sendMessageBody
});

export default messagesReducer;