import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import combinedReducers from "./combineReducers";

const persistConfig = {
    key: 'root',
    storage,
};

const middlewares = [];

const persistedReducer = persistReducer(persistConfig, combinedReducers);
const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)));
const persistor = persistStore(store);

export { store, persistor }