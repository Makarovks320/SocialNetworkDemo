const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
  dialogs: [
    {
      name: "Volodya",
      surname: "Putler",
      user_id: "1",
    },
    {
      name: "Louis",
      surname: "Suarez",
      user_id: "2",
    },
    {
      name: "Evgen",
      surname: "Bajenov",
      user_id: "3",
    },
    {
      name: "Alexander",
      surname: "Pushkin",
      user_id: "4",
    },
    {
      name: "Bari",
      surname: "Alibasov",
      user_id: "5",
    }
  ],
  messages: [
    {
      id: 1,
      message: "Плоти нологе!",
      user_id: 1
    },
    {
      id: 2,
      message: "Let's grab a bite!",
      user_id: 2
    },
    {
      id: 3,
      message: "For you and for Sashka!",
      user_id: 3
    },
    {
      id: 4,
      message: "The less a woman we love, the easier she likes us...",
      user_id: 4
    },
    {
      id: 5,
      message: "Let's drink?!",
      user_id: 5
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