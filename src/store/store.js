import {configureStore} from '@reduxjs/toolkit'
import filterSilce  from './slices/filterSlices'

const store = configureStore({
    reducer:{
        filter: filterSilce.reducer,
    }
})

export default store