export const loggleMiddleware = store => next => action => {
    if (!action.type) {
        return next(action);
    }

    console.log("===================");
    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("currentState: ", store.getState());
    console.log("------------");

    next(action);

    console.log("next state: ", store.getState());
    console.log("===================");
};
