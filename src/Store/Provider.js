'use client'
import { Provider } from "react-redux"
import store from "./store"

function Providers({children}){
    <Provider store={store}>
        {children}
    </Provider>
}



export default Providers
