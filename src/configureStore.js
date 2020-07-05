
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer/loginReducer";
import mySaga from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  const middleware = [sagaMiddleware];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  // then run the saga
  sagaMiddleware.run(mySaga);
  return store;
}
