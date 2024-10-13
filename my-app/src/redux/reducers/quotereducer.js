const initialState = {
    quote: '',
    author: '',
    loading: false,
    error: null,
};
export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_QUOTE_REQUEST":
            return {...state, loading: true, error: null}
        case "FETCH_QUOTE_SUCCESS":
            return {...state, quote: action.payload.quote, author: action.payload.author, payload: false}
        case "FETCH_QUOTE_FAILURE":
            return {...state, loading: false, error: action.payload}
        default: return state
    }
}