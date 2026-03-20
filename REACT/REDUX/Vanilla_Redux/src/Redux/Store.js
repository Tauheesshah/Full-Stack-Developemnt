import {legacy_createStore} from 'redux'

import {Reducer as RegularReducer} from './Reducer'
import {Reducer as ExtraReducer} from './ExtraReducer'
import {DOUBLE} from './Action'


// const initialValue = {
//     amount:0,
//     isError:false,
//     isComplete:false,
// };

const myStore = legacy_createStore(RegularReducer)

setTimeout(()=>{
    myStore.replaceReducer(ExtraReducer)
    myStore.dispatch({type:DOUBLE})
},3000)

// const observed = myStore['@observable']();

// observed.subscribe({
//     next:(event)=>console.log('this os from observe subscribe', event)
// })

export{myStore}