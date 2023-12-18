import {createSlice} from '@reduxjs/toolkit'

const filterSilce = createSlice({
    name:'type',
    initialState:{
        type:'clear',
        age:'clear',
        breeds:'clear',
        gender:'clear',
    },
    reducers:{
        changeFilter(state, action){
            const { key, value } = action.payload;
            if (key in state) {
              state[key] = value;
            }
        }
    },
})

export const {changeFilter} = filterSilce.actions //export the funtion to be executed to bring out the change

export default filterSilce