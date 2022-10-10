import profileReducer from "./profile_reducer";
import messagesReducer from "./messages_reducer";

let store = {
    _subscriber() {
        console.log('no subscribers')
    },
    _state: {
        profilePage: {
            posts: [
                {
                    id: '3',
                    datetime: '2019-11-18T09:54',
                    author: 'Anastacia Zavorotnyuk',
                    text: 'Скиньте деньги на лечение, пожалуйста!',
                    likesCount: '289'
                },
                {
                    id: '2',
                    datetime: '2017-11-18T09:54',
                    author: 'Anastacia Zavorotnyuk',
                    text: 'adsasdas',
                    likesCount: '150'
                },
                {
                    id: '1',
                    datetime: '2016-11-18T09:54',
                    author: 'Anastacia Zavorotnyuk',
                    text: 'Post content: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi sed facilis eos, dolorum enim vel distinctio doloremque molest',
                    likesCount: '64'
                }
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {
                    name: "Volodya",
                    surname: "Putler",
                    author_id: "1",
                },
                {
                    name: "Louis",
                    surname: "Suarez",
                    author_id: "2",
                },
                {
                    name: "Evgen",
                    surname: "Bajenov",
                    author_id: "3",
                },
                {
                    name: "Alexander",
                    surname: "Pushkin",
                    author_id: "4",
                },
                {
                    name: "Bari",
                    surname: "Alibasov",
                    author_id: "5",
                }
            ],
            messages: [
                {
                    id: 1,
                    message: "Плоти нологе!",
                    author_id: 1
                },
                {
                    id: 2,
                    message: "Let's grab a bite!",
                    author_id: 2
                },
                {
                    id: 3,
                    message: "For you and for Sashka!",
                    author_id: 3
                },
                {
                    id: 4,
                    message: "The less a woman we love, the easier she likes us...",
                    author_id: 4
                },
                {
                    id: 5,
                    message: "Let's drink?!",
                    author_id: 5
                },
            ],
            newMessageBody: '',
        }
    },

    subscribe(callBack) {
        this._subscriber = callBack;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._subscriber(this._state);
    }
}


export default store;