const initialState = {
    title: 'GeekTech!',
    aboutTitle: "old title",
    contactTitle: "",
}

export default function reducer(state = initialState,  action) {
    if(action.type === 'CHANGE_TITLE'){
        return {type: 'GEEKS!'}
    }else if (action.type === 'CHANGE_ABOUT_TITLE'){
        return{ aboutTitle: "New about title"}
    }else if (action.type === 'WITH_PARAMS'){
        return {contactTitle: action.payload}
    }else if (action.type === 'FROM_INPUT'){
        return {contactTitle: action.payload}
    }

    return state;
}
