import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage,
    // blacklist: ["user"],
    whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [sagaMiddleware];
const middleWares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(
    Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// // ! -----------------------------
// // ! -----------------------------
// // ! -----------------------------

// const gen = function* (num) {
//     yield num;
//     yield num + 10;
//     return "dog";
// };

// const a = gen(5);
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
