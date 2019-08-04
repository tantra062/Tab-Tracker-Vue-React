import {useState, useReducer, useEffect} from 'react';
import dataFetchReducer from './DataFetchReducer';
import { songsService } from './services/songsService';
import { bookmarkService } from './services/bookmarkService';
import { historyService } from './services/historyService';
import { authenticationService } from './services/authenticationService';

const useDataApi = (initialFetchType, initialData) => {
    //fetchType, action: SONG LOGIN BOOKMARK HISTORY, payload: payload, token: token
    const [fetchType, setFetchType] = useState(initialFetchType);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: true,
        isError: false,
        data: initialData,
    });

    useEffect(() => {
    let didCancel = false; //onComponentMount

    const serviceType = async (props) =>{
        let res = undefined;
        switch( props.action ) {
            case "SONG":
                res = await songsService(props.type, props.payload)
                return res
            case "BOOKMARK":
                res = await bookmarkService(props.type, props.payload)
                return res
            case "HISTORY":
                res = await historyService(props.type, props.payload)
                return res
            case "AUTH":
                res = await authenticationService(props.type, props.payload)
                return res
            default:
                return
        }
    }

    const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' }); // run reducer FETCH_INIT, setIsLoading:true, setIsError: false
        try {
            const result = await serviceType(fetchType)

            if(!didCancel && result.result=== "ERROR"){
                dispatch({ type: 'FETCH_ERROR', result: result });
            }
            if (!didCancel) {
                dispatch({ type: 'FETCH_SUCCESS', payload: result });
            }
        } catch (error) {
            if (!didCancel) {
                dispatch({ type: 'NOTHING_TO_FETCH' });
            }
        }
    };

    fetchData();

    return () => {
            //Automatically comes here if component is unmounted
            didCancel = true;
        };
    }, [fetchType]);

    return [state, setFetchType];
};

export default useDataApi;

