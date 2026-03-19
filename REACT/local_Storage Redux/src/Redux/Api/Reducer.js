import * as types from './Action'

const initialValue={
    userData:[],
    isLoading:false,
    isError:false,
}

const Reducer=(oldState=initialValue,{type,payload})=>{
    switch(type){
        case types.USER_DATA_REQUEST:
            return{
                ...oldState,
                isLoading:true,
            };
        case types.USER_DATA_SUCCESS:
            return{
                ...oldState,
                isLoading:false,
                userData:payload
            };
        case types.USER_DATA_REQUEST:
            return{
                ...oldState,
                isLoading:false,
                isError:true
            };
        default:
            return oldState;
    }
}

export {Reducer}