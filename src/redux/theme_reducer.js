
const SET_DARK = 'SET_DARK'
const SET_BLUE = 'SET_BLUE'
const SET_LIGHT = 'SET_LIGHT'

let initialState ={
  themeColors: {
    mainBorder: "black",
    mainBG: "#343a40",
    subBG: "#068063",
    followedBG: "rgb(40, 164, 64)",
    unfollowedBG: "rgb(228, 127, 127)",
    mainLink:  "rgb(0, 130, 102)",
    hoverLink:  "rgba(172,172,172)",
    checkedLink: "white",
    mainText: "rgba(109,109,109)",
    hoverMainText: "#fff",
  }
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK:
      return {
        ...state,
        themeColors: {
            mainBorder: "black",
            mainBG: "#343a40",
            subBG: "#068063",
            followedBG: "rgb(40, 164, 64)",
            unfollowedBG: "rgb(228, 127, 127)",
            mainLink:  "rgb(0, 130, 102)",
            hoverLink:  "rgba(172,172,172)",
            checkedLink: "white",
            mainText: "rgba(109,109,109)",
            hoverMainText: "#fff",
        }
      }
    case SET_LIGHT:
    return {
      ...state,
      themeColors: {
        mainBorder: "black",
        mainBG: "#f8f9fa",
        subBG: "rgb(228, 158, 158)",
        followedBG: "rgb(40, 164, 64)",
        unfollowedBG: "rgb(228, 127, 127)",
        mainLink:  "rgb(0, 130, 102)",
        hoverLink:  "rgba(172,172,172)",
        checkedLink: "red",
        mainText: "rgba(109,109,109)",
        hoverMainText: "#fff",
      }
    }
    case SET_BLUE:
      return {
        ...state,
        themeColors: {
          mainBorder: "black",
          mainBG: "#83bfff",
          subBG: "#007bff",
          followedBG: "rgb(40, 164, 64)",
          unfollowedBG: "rgb(228, 127, 127)",
          mainLink:  "#83bfff",
          hoverLink:  "rgba(172,172,172)",
          checkedLink: "yellow",
          mainText: "black",
          hoverMainText: "#fff",
        }
      }
    default:
      return state;
  }
}

export const setDarkTheme = () => ({type: SET_DARK});
export const setLightTheme = () => ({type: SET_LIGHT});
export const setBlueTheme = () => ({type: SET_BLUE});


export default themeReducer;