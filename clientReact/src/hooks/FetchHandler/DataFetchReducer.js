const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return { ...state, isLoading: true, isError: false };
        case 'FETCH_SUCCESS':
            return { ...state, isLoading: false, isError: false, ...action.payload };
        case 'FETCH_ERROR':
            return { ...state, isLoading: false, isError: true, data: action.result };
        case 'NOTHING_TO_FETCH':
            return { ...state, isLoading: false, isError: true, data: { error: ""} };
    default:
        throw new Error();
    }
};
export default dataFetchReducer;