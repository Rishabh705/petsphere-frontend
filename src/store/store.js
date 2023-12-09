import {configureStore} from '@reduxjs/toolkit'
import filterSilce  from './slices/filterSlices'
import authSlice from './slices/authSlice'

const store = configureStore({
    reducer:{
        filter: filterSilce.reducer,
        auth:authSlice.reducer,
    }
})

export default store