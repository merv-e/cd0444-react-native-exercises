import {configureStore} from "@reduxjs/toolkit"

const initializeStore = (preloadedState = {}) => {
    const store = configureStore({
        reducer, 
        preloadedState,
    })
    return store
}

export default initializeStore