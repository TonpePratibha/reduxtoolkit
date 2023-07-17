import  { legacy_createStore as CreateStore } from "redux";
import reducers from './reducers/index'

const Store = CreateStore(reducers,
    {},
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default Store;